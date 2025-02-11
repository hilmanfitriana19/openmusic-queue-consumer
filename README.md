# openmusic-queue-consumer

Repository aplikasi tambahan pada Submission Kelas [Dicoding Belajar Fundamental Aplikasi Back-End](https://www.dicoding.com/academies/271) 
untuk memenuhi kriteria "fitur Expor Lagu Pada Playlist" menggunakan message broker RabbitMQ.

# Quickstart

Clone Repository
```
git clone https://github.com/hilmanfitriana19/openmusic-back-end
```
```bash
cd openmusic-queue-consumer
```

Install dependency
```bash
npm install
```

Menyiapkan environment dengan menggunakan .env.template yang tersedia
```bash
# Postgresql
PGUSER=
PGHOST=
PGPASSWORD=
PGDATABASE=
PGPORT=

# Nodemailer SMTP authentication
MAIL_HOST=
MAIL_PORT=
MAIL_ADDRESS=
MAIL_PASSWORD=

# Message broker
RABBITMQ_SERVER=
```

Start Project
```bash
npm run start
```
