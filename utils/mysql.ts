import mysql, { Pool } from "mysql2/promise";
import "dotenv/config";

const db: Pool = mysql.createPool({
  host: process.env.DBHOST as string,
  user: process.env.DBUSER as string,
  password: process.env.DBPASSWORD as string,
  database: process.env.DATABASE as string,
  port: Number(process.env.DBPORT) || 3306,
});

const checkDbConnection = async (): Promise<void> => {
  try {
    const connection = await db.getConnection(); // connection 객체를 가져옴
    console.info("✅ MySQL is connected successfully.");
    connection.release(); // 연결 반환
  } catch (err) {
    console.error("❌ MySQL connection error:", err);
  }
};

const dataQuery = async (query: string, values: any[]): Promise<any> => {
  try {
    const [result] = await db.query(query, values); // `await`을 사용하여 쿼리 실행
    return result; // 결과 반환
  } catch (error) {
    throw error; // 오류 처리
  }
};

export { checkDbConnection, dataQuery };
