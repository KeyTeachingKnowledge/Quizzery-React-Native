from __future__ import print_function  

with open("idioms.txt", "r") as f:
    data = f.readlines()

data = [item.strip() for item in data]

idioms = data[0::5]
explanations = data[1::5]
questions = data[2::5]
answers = data[3::5]

idioms = [ (''.join([i for i in idiom if not i.isdigit()])) for idiom in idioms]
idioms = [ idiom[2:] for idiom in idioms] 
questions = [question[3:] for question in questions]
explanations = [ (idiom+': '+explanation) for idiom, explanation in zip(idioms, explanations)]

for i, question in enumerate(questions):
    print(f'{i} - {question} \n')
Entries = []


import random
import json


class Entry(object):
   Q =  "Sample Question"
   A0 =  "Answer A"
   A1 =  "Answer B"
   A2 =  "Answer C"
   A3 =  "Answer D"
   correct =  '1'
   explanation =  "It's because"
   referTo =  ""

    # The class "constructor" - It's actually an initializer 
   def __init__(self, Q, answer, allAnswers, explanation, referTo):
         self.Q = Q
         letters = ['A', 'B', 'C', 'D']
         correctLetter = random.randint(1, 4) - 1
         self.correct = correctLetter + 1
         letters[correctLetter] = answer
         for (i, letter) in enumerate(letters):
            if i != correctLetter:
               letters[i] = letters[correctLetter]
               while letters[i] == letters[correctLetter]:
                  letters[i] = random.choice(allAnswers)
         self.A0 = letters[0]
         self.A1 = letters[1]
         self.A2 = letters[2]
         self.A3 = letters[3]
         self.explanation = explanation
         self.referTo = referTo

   def toJSON(self):
         return json.dumps(self, default=lambda o: o.__dict__, 
               sort_keys=True, indent=4)
         

for i in range(len(idioms)):
    Entries.append(Entry(questions[i], answers[i], answers, explanations[i], ""))


Entries = [str(entry.toJSON()) for entry in Entries]


#print(*Entries, sep='\n')

with open('entries.txt', 'w') as f:
    for line in Entries:
        f.write(f"{line},")