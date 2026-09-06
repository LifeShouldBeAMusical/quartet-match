"""Config"""

# config = configparser.ConfigParser()
# config.read(environ["SETTINGS_FILE"] if "SETTINGS_FILE" in environ else "settings.ini")

import os

database_connection_string = os.environ.get("database", "sqlite+aiosqlite:///data.db")
