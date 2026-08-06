from datetime import datetime
from datetime import date
from datetime import time
from datetime import timedelta



from datetime import datetime 
now = datetime.now()
print(now)

today = date.today()
print(today)


type(today)


d = date(2026,8,15)
print(d)


print(d.year)
print(d.month)
print(d.day)

from datetime import datetime 
now = datetime.now()
print(now)

print(now.year)
print(now.month)
print(now.day)
print(now.hour)
print(now.minute)
print(now.second)

print(now.strftime("%d - %m -%Y"))
print(now.strftime("%d%m%Y"))
print(now.strftime("%d %m %Y %H:%M:%S"))
print(now.strftime("%d  %B %Y"))
print(now.strftime("%A"))
