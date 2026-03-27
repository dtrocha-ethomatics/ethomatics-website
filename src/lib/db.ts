import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;

  const dbPath = process.env.DATABASE_PATH || path.join(process.cwd(), "data", "ethomatics.db");

  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  db = new Database(dbPath);
  db.pragma("journal_mode = WAL");

  db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ref_number TEXT NOT NULL,
      mode TEXT NOT NULL CHECK(mode IN ('LEAD', 'KONTAKT')),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL,
      message TEXT NOT NULL,
      quiz_score INTEGER,
      quiz_category TEXT,
      quiz_category_title TEXT,
      quiz_detail_answers TEXT,
      quiz_free_texts TEXT,
      consent_text TEXT NOT NULL,
      consent_timestamp TEXT NOT NULL,
      ip_address TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS counters (
      key TEXT PRIMARY KEY,
      value INTEGER NOT NULL DEFAULT 0
    );

    INSERT OR IGNORE INTO counters (key, value) VALUES ('lead', 0);
    INSERT OR IGNORE INTO counters (key, value) VALUES ('kontakt', 0);
  `);

  return db;
}

export function incrementCounter(key: "lead" | "kontakt"): number {
  const database = getDb();
  const stmt = database.prepare("UPDATE counters SET value = value + 1 WHERE key = ? RETURNING value");
  const row = stmt.get(key) as { value: number };
  return row.value;
}

export interface SubmissionRow {
  ref_number: string;
  mode: "LEAD" | "KONTAKT";
  name: string;
  email: string;
  company: string;
  message: string;
  quiz_score?: number | null;
  quiz_category?: string | null;
  quiz_category_title?: string | null;
  quiz_detail_answers?: string | null;
  quiz_free_texts?: string | null;
  consent_text: string;
  consent_timestamp: string;
  ip_address?: string | null;
}

export function insertSubmission(data: SubmissionRow): void {
  const database = getDb();
  const stmt = database.prepare(`
    INSERT INTO submissions (
      ref_number, mode, name, email, company, message,
      quiz_score, quiz_category, quiz_category_title,
      quiz_detail_answers, quiz_free_texts,
      consent_text, consent_timestamp, ip_address
    ) VALUES (
      @ref_number, @mode, @name, @email, @company, @message,
      @quiz_score, @quiz_category, @quiz_category_title,
      @quiz_detail_answers, @quiz_free_texts,
      @consent_text, @consent_timestamp, @ip_address
    )
  `);
  stmt.run({
    ...data,
    quiz_score: data.quiz_score ?? null,
    quiz_category: data.quiz_category ?? null,
    quiz_category_title: data.quiz_category_title ?? null,
    quiz_detail_answers: data.quiz_detail_answers ?? null,
    quiz_free_texts: data.quiz_free_texts ?? null,
    ip_address: data.ip_address ?? null,
  });
}
