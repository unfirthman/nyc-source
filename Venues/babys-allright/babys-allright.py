# Imports
import requests
from bs4 import BeautifulSoup
from pathlib import Path
import json

# request html, beautiful soup results

url = "https://wl.seetickets.us/wafform.aspx?_act=Search&AJAX=1&_tab=Event&_sea=WhiteLabelEventSearchV3&s=&ProfileID=6066969&WhiteLabelKey=BabysAllRightBrooklyn&afflky=BabysAllRightBrooklyn&EventStart=&EventStart2=&Tag=&pastevents=&SortBy=all&redrawSearchBar=true"
result = requests.get(url)
doc = BeautifulSoup(result.text, "lxml")

print(doc.prettify())
# parsing by class type

# parsing by event name
events_block = doc.find_all(class_="hover-name")
# parsing by dates
dates_block = doc.find_all(class_="hover-date")

# parsing by detail
# details_block = doc.find_all(class_="sg-tribe-events-calendar-list__event-extra-info")

# date list
date_time = []
for date in dates_block:
    item = date.get_text(strip=True)
    date_time.append(item)
# print(date_time)


# name list
name_list = []
for title in events_block:
    item = title.get_text(strip=True)
    name_list.append(item)
# print(name_list)

# print(len(name_list))

# more details


# zip lists
names_dates_list = zip(name_list, date_time)
names_dates_list = list(names_dates_list)

# print lists
print(*names_dates_list, sep="\n")

# write data to a JSON file
# with Path("../../JSON/babys-allright.json").open("w") as outfile:
 #   json.dump(names_dates_list, outfile)
