FROM debian:bookworm-slim

WORKDIR /app

RUN apt-get update \
  && apt-get install -y curl tar \
  && rm -rf /var/lib/apt/lists/*

RUN curl -L https://github.com/user-attachments/files/25848271/zor-v0.0.2-linux-x64.tar.gz \
  -o /tmp/zor.tar.gz \
  && tar -xzf /tmp/zor.tar.gz -C /tmp \
  && mv /tmp/zor /usr/local/bin/zor \
  && chmod +x /usr/local/bin/zor \
  && rm /tmp/zor.tar.gz

COPY main.zor .
COPY public ./public

EXPOSE 8080

CMD ["zor", "main.zor"]
