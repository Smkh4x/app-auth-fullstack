import socket
from pathlib import Path
import re
socket_ = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
try:
    socket_.connect(("8.8.8.8", 80))  
    ip = socket_.getsockname()[0]
finally:
    socket_.close()


path = Path("mobile") / "services" / "api.ts"

with open(path, "r", encoding="utf-8") as file:
    content = file.read()
    new_ip = ip
content = re.sub(
    r'baseURL:\s*"http://.*?:3009/api/"',
    f'baseURL: "http://{new_ip}:3009/api/"',
    content
)
with open(path, "w", encoding="utf-8") as file:
    file.write(content)
    print("change ip successfully")




