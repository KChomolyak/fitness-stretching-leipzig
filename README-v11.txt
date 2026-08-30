Fitness Stretching Leipzig — v11

New configuration files:

1. config/theme.json
   Controls three background roles, three text roles and the border color.
   All values use the #RRGGBB format.

2. config/sections.json
   Controls the visibility and order of the main page sections.
   Each item contains id, visible and order.

Fallback behavior:

- If theme.json is unavailable or contains an invalid color, the v11 default
  palette is used for that value.
- If sections.json is unavailable or invalid, all sections are displayed in
  the standard v11 order.

These files are suitable for direct editing by the Telegram bot.
