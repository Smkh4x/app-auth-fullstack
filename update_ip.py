import socket
from pathlib import Path
import re

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

try:
    s.connect(("8.8.8.8", 80))
    ip = s.getsockname()[0]
finally:
    s.close()

path = Path("mobile") / "services" / "api.ts"

content = path.read_text(encoding="utf-8")

content = re.sub(
    r'baseURL:\s*"http://.*?:\d+/api"',
    f'baseURL: "http://{ip}:3009/api"',
    content
)

path.write_text(content, encoding="utf-8")

print(f"IP changed successfully: {ip}")