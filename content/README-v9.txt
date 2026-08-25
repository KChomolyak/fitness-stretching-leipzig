v9 content model

prices.json
- public service catalogue and prices
- service id is referenced from schedule files
- each price option has its own id, quantity, totalPrice and unitPrice

blog.json
- all blog cards and full article content in de/uk/ru/en
- visible=false hides an article
- image is a repository-relative path

regular_schedule.json
- recurring weekly lessons
- weekday: 1=Monday ... 7=Sunday
- endDate can be null for no fixed end

schedule_exceptions.json
- type=exclude removes one recurring occurrence for a date using regularEventId
- type=add adds a one-off lesson on a specific date
- a moved lesson is represented by an exclude + add pair (optionally sharing groupId)

Telegram booking
- set config/site.json -> booking.url to the final Telegram bot URL when available.
