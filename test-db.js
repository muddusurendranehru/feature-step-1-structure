// test-db.js — DELETE THIS FILE after testing (it's just for verification)
require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');

async function testConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('⏳ Connecting to Neon...');
    await client.connect();
    console.log('✅ Connected successfully!\n');

    const ping = await client.query('SELECT 1 AS ping');
    console.log('✅ Basic ping:', ping.rows[0]);

    const dbName = await client.query('SELECT current_database()');
    console.log('✅ Connected to database:', dbName.rows[0].current_database);

    const tables = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `);
    console.log('\n✅ Tables in ClinicFlow:');
    tables.rows.forEach(row => console.log('   -', row.table_name));

  } catch (err) {
    console.error('❌ Connection failed:', err.message);
    console.error('\nFull error:', err);
  } finally {
    await client.end();
    console.log('\n⏹️  Connection closed.');
  }
}

testConnection();
