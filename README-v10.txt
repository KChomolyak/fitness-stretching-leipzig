Fitness Stretching Leipzig — v10

Basis
- v9_fitness_stretching_leipzig_site_latest(2).zip
- Design, prices, schedule structure and existing photos were preserved.

Important when updating GitHub
- The content JSON files included in this archive were synchronized with the versions published on fitness-stretching-leipzig.de on 28.08.2026.
- Before a later deployment, compare content/prices.json, content/regular_schedule.json, content/schedule_exceptions.json and content/blog.json with the current GitHub versions.
- Do not overwrite newer changes made by the Telegram bot. Merge changes if the bot has updated a JSON file after this archive was created.
- Bot users, Telegram IDs, permissions, tokens and private booking data must never be uploaded with the public website.

Schedule compatibility
- regular_schedule.json may be an array or contain regularEvents, events, schedule or items.
- schedule_exceptions.json may be an array or contain exceptions, events, schedule or items.
- weekday accepts 1–7, 0 for Sunday, numeric strings and weekday names.
- bookingAvailable is optional. Missing means true. false keeps the class visible but disables booking.
- One-time entries and common add/exclude aliases are supported.

External services
- The MDV/INSA public-transport planner is loaded only after the visitor clicks the public-transport card.
- Apple Maps, Google Maps and Waze open only after the visitor selects a navigation option.
