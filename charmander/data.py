SECRET = 'b0a2626f-9ce0-4456-839e-e411ba6501ea'
EXPIRATION = 30
ALGORITHM = 'HS256'

comments = {
  '933a5177': {
    'id': '933a5177',
    'user': '1ec38fd5',
    'text': "When Eddard Stark learned the truth, he told only me. I'll not make the same mistake. Send copies of that letter to every corner to the realm, from the Arbor to the Wall. The time has come to choose. Let no man claim ignorance as an excuse.",
    'datetime': '2016-08-21T17:28:26.108937'
  },
  '9d587390': {
    'id': '9d587390',
    'user': '51f7709a',
    'text': "I never met my mother. My father wouldn't even tell me her name. I don't know if she's living or dead. I don't know if she's a noblewoman or a fisherman's wife or a whore...",
    'datetime': '2016-08-21T15:02:06.022893'
  }
}

usersByUsername = {
  'stannis': '1ec38fd5',
  'stark': '51f7709a',
}

users = {
  '1ec38fd5': {
    'id': '1ec38fd5',
    'first_name': 'Stannis',
    'last_name': 'of House Baratheon',
    'image': 'images/profiles/stannis.png',
    'description': "The second born son of Steffon Baratheon and Cassana Baratheon, the younger brother of the late King Robert Baratheon and older brother of Renly Baratheon. Steffon was the head of House Baratheon and Lord Paramount of the Stormlands. The Stormlands are one of the constituent regions of the Seven Kingdoms and House Baratheon is one of the Great Houses of the realm. Steffon died when the boys were young and Robert inherited his titles. Stannis is a serious and severe man.",
    'username': 'stannis',
    'password': 'king',
  },
  '51f7709a': {
    'id': '51f7709a',
    'first_name': 'Jon',
    'last_name': 'Snow',
    'image': 'images/profiles/jon-snow.jpg',
    'description': "Maidenpool Wun Weg Wun Dar Wun skirling pass lemonwood loras tower of joy ashara. Night's king sunspear maidenpool areo. bran fingers alliser thorne castle black eyrie oh my sweet summer child lemonwood jaehaerys ashara tormund. Storm's end maegor red keep, wyman manderly aemon areo hotah coldhands rickon summerhall frostfangs brandon stark.",
    'username': 'stark',
    'password': 'ygritte4ev3r',
  },
}

products = {
  'entities': {
    '82598577': {
      'id': '82598577',
      'title': 'Vasos simples',
      'screenshot': 'images/products/vases.jpg',
      'description': "the wall fire and blood joffrey howland reed dontos hollard euron rhaenyra varys. Bael the bard king's landing the knights of summer fear cuts deeper than swords osha elia egg pyke. Catelyn the pointy end shireen greatjon the lone wolf dies but the pack survives lady. Greywind ruby ford areo hotah, jaime jory great wyk promise me ned oh my sweet summer child.",
      'comments': [
        '9d587390',
        '933a5177',
      ],
      'price': {
        'value': '2.99',
        'currency': 'USD',
      },
      'seller': '1ec38fd5',
    },
    'bfa60128': {
      'id': 'bfa60128',
      'title': 'Vasos de areia',
      'screenshot': 'images/products/areias.jpg',
      'description': " Varys brandon stark and now it begins lysa lannisport wyman manderly sansa benjen bran watcher on the walls. Lemonwood aenys sandor, the north remembers gregor rhaenyra only Cat crownlands elia aemon nymeria. Margaery stormlands euron sandor ashara.\n\nStarfall astapor neck riverlands, what is dead may never die howland reed khal drogo fuck your water bring me wine jon snow bloodraven you know nothing viserys baelor vaes dothrak.",
      'comments': [],
      'price': {
        'value': '2.99',
        'currency': 'USD',
      },
      'seller': '1ec38fd5',
    }
  },
  'order': [
    '82598577',
    'bfa60128',
  ]
}

def getUserByUsername(username):
  userId = usersByUsername.get(username, None)
  return users.get(userId) if userId else None
