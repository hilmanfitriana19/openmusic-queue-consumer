# openmusic-queue-consumer

Repository aplikasi tambahan pada Submission Kelas [Dicoding Belajar Fundamental Aplikasi Back-End](https://www.dicoding.com/academies/271) .

# Quickstart

Clone Repository
```
git clone https://github.com/hilmanfitriana19/openmusic-queue-consumer
```
```bash
cd openmusic-queue-consumer
```

Install dependency
```bash
npm install
```

Membuat .env dengan referensi pada..env.example
```bash
# Postgresql
PGUSER=
PGHOST=
PGPASSWORD=
PGDATABASE=
PGPORT=

# Nodemailer SMTP authentication
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=

# Message broker
RABBITMQ_SERVER=
```

Start Project
```bash
npm run start
```
