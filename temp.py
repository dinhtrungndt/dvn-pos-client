import sqlite3
conn = sqlite3.connect('D:/cty/ItH/api/api_dvn_pos/dvn_pos.db')
tables = conn.execute("SELECT name FROM sqlite_master WHERE type='table';").fetchall()
print('Tables:', tables)
if ('user',) in tables:
    print('Users:', conn.execute('SELECT Id, TenantId, Phone FROM user').fetchall())
if ('tenant',) in tables:
    print('Tenants:', conn.execute('SELECT Id, Subdomain FROM tenant').fetchall())
