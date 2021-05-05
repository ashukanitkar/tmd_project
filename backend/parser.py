from bs4 import BeautifulSoup
import json
import re

# Left Winged Users: Benje, Candice
# Right Winged Users: Derren, Dongxue
# Control Users: Cole, Jaeden

users = []

usernames  = ["benje", "candice", "derren", "dongxue", "cole", "jaeden"]

for username in usernames:
    filename = "watch_histories/" + username + "-watch-history.html"
    print(filename)
    with open(filename, "r") as f:
        history = f.read()
        users += [history]

print(f'Number of Users: {len(users)}')

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
            # print(new_user_data["videos"], "HERE")
            link = link.replace("watch?v=", "embed/")
            new_user_data["videos"].append({"title": title, "link": link})
    json_object["users"].append(new_user_data)

output_json = json.dumps(json_object, indent=3)
print(output_json)

with open('../frontend/src/watch_histories.json', 'w') as outfile:
    json.dump(json_object, outfile, indent=3)


