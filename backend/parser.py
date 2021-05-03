from bs4 import BeautifulSoup
import json
import re

users = []

## Fetch all watch histories
# with open('INSERTHTMLFILEHERE', 'r') as f:
# 	history = f.read()
# 	users += [history]
## Left Wing Users

#Aleeha
with open("aleeha-watch-history.html", "r") as f:
	history = f.read()
	users += [history]
#Benjie
with open("benje-watch-history.html", "r") as f:
	history = f.read()
	users += [history]



json_object = {"users": []}

for index, user in enumerate(users):
	new_user_data = {"videos": []}
	soup = BeautifulSoup(user, "html.parser")
	card_elements = soup.select('div[class*="outer-cell mdl-cell"]')

	# Each element has two <a> tags
	# 1st: video, 2nd: channel
	for card_element in card_elements:
		video_link = card_element.findAll('a', href=re.compile("www.youtube.com/watch?"))

		# Accounts for videos that have been removed
		if len(video_link) >= 1:
			title = video_link[0].getText()
			link = video_link[0]['href']
			#print(new_user_data["videos"], "HERE")
			new_user_data["videos"].append({"title": title, "link": link})
	json_object["users"].append(new_user_data)

output_json = json.dumps(json_object)
print(output_json)


# Aleeha (0), Benje (1)