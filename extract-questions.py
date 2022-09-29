import pandas as pd
df = pd.read_excel(io='Qs.xlsx', sheet_name='8753')
# remove first three columns
df = df.iloc[:,2:]
# remove rows with no question
df = df.dropna(subset=['Questions'])



QuizEntries = []
def pre(stringo):
    # remove inital spaces
    stringo = stringo.lstrip()
    return stringo[1:] if stringo[0] == '#' else stringo
    

def checkRight(s1, s2, s3, s4):
    if s1[0] == '#':
        return '1'
    elif s2[0] == '#':
        return '2'
    elif s3[0] == '#':
        return '3'
    elif s4[0] == '#':
        return '4'
    else:
        return '1'

class Object(object):
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

for i in range(0, len(df), 5):
    Entry = Object()
    Entry.Q = df.iloc[i, 0]
    Entry.A0 = pre(df.iloc[i+1, 0])
    Entry.A1 = pre(df.iloc[i+2, 0])
    Entry.A2 = pre(df.iloc[i+3, 0])
    Entry.A3 = pre(df.iloc[i+4, 0])
    Entry.correct = checkRight(df.iloc[i+1, 0], df.iloc[i+2, 0], df.iloc[i+3, 0], df.iloc[i+4, 0])
    Entry.explanation = ""
    Entry.referTo = ""
    QuizEntries.append(Entry)

import json
QuizEntries = [str(entry.toJSON()) for entry in QuizEntries]

# save QuizEntries as JSON
with open('Qs.json', 'w') as f:
    f.write('[')
    for i, entry in enumerate(QuizEntries):
        f.write(entry)
        if i != len(QuizEntries) - 1:
            f.write(',')
    f.write(']')