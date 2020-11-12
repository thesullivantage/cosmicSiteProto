# -*- coding: utf-8 -*-
"""
Created on Wed Nov  4 16:49:47 2020

Script for splitting logFiles, matching them to outputted text files

@author: Jack
"""

import numpy as np
import matplotlib.pyplot as plt
import json

logFile = open("C:/Users/Jack/OneDrive/Documents/Fall2020/HeResearch/researchDocs/Rm402SA_HeHome_2020-08-30-to-2020-09-20.log","r")
Lines = logFile.readlines()




print(Lines[len(Lines)-1])

dateSplit = []

#First array item is [date] so skip this index
for i in range(1, len(Lines)): 
    
    ## Splitting by comma 
    
    # Split all items by comma 
    current = Lines[i].split(",", 1)
    
    #Isolate to time data
    current = current[0:1]
        
    # Split date from time
    newCurr = current[0].split("T")
    
    # Split hours from minutes and seconds
    timeHold = newCurr[1].split(":")
        
    # split sec and milliseconds
    secHold = timeHold[2:][0].split(".")
    # print(secHold)
    
    #trim z off of millisecondhold 
    msHold = secHold[1].split("Z")[:1]
    
    # Combine all time elements in single array
    # [ date, hour, minute, second, millisecond ]
    timeComb = newCurr[:1] + timeHold[:2] + secHold[:1] + msHold
    
    # print(timeComb)
    dateSplit.append(timeComb)

# look for total "hour" points
hourArr = []

totalCount = 0
offCount = 0

initial = dateSplit[0][0] + ":" + dateSplit[0][1]
hourArr.append(initial)

for b in range(1, len(dateSplit)):
    
    locCount = 0
    
    if (dateSplit[b][1] != dateSplit[b-1][1]):
        toAdd = dateSplit[b][0] + ":" + dateSplit[b][1]
        hourArr.append(toAdd)
        # offCount += 1
        # print(toAdd)
        
hourArr = hourArr[2:]


    # else: 
    #     locCount+=1
    # totalCount += locCount
    
    
# Checking Stuff 
# print(len(hourArr))
# print(len(Lines))
# print("Count: ", totalCount)
# print("off: ", offCount)
        
# Checking output file 

textFile = open("C:/Users/Jack/OneDrive/Documents/Fall2020/HeResearch/researchDocs/newHourlycounts.txt","r")
textLines = textFile.readlines()

dates = []


ch12 = [] 
ch12.append({})
ch12[0]['id'] = "Channel 1 & 2 Coinstance"
ch12[0]['data'] = [
    ]
ch13 = [] 
ch13.append({})
ch13[0]['id'] = "Channel 1 & 3 Coinstance"
ch13[0]['data'] = []



ch23 = [] 
ch23.append({})
ch23[0]['id'] = "Channel 2 & 3 Coinstance"
ch23[0]['data'] = []

for z in range(len(textLines)):
    splitSpace = textLines[z].split('  ')
    for w in range(len(splitSpace)): 
        splitSpace[w] = splitSpace[w].strip()
        
    
    ch12[0]['data'].append({'x': splitSpace[0], 'y': splitSpace[1]})
    ch13[0]['data'].append({'x': splitSpace[0], 'y': splitSpace[2]})
    ch23[0]['data'].append({'x': splitSpace[0], 'y': splitSpace[3]})

arr = []
ind = [0]
N = 0

for b in range(4):
    
    arr.append(((ch23)[0]["data"][N]['x']))
    ind.append(N)
    N += int(508//4)
    print (N)

arr.append(((ch23)[0]["data"][507]['x']))

print(arr)

with open('./src/assets/json/ch12.json', 'w') as outfile:
    json.dump(ch12, outfile)
    
with open('./src/assets/json/ch13.json', 'w') as outfile:
    json.dump(ch13, outfile)    
  
with open('./src/assets/json/ch23.json', 'w') as outfile:
    json.dump(ch23, outfile)    




# plt.xlabel('x'); plt.ylabel('y')
# # plt.axis([-30, 30, 0, 1.5])
# # plt.plot(x, f(x) , 'r-', label='func')
# plt.plot(dates, ch12 , 'b-', label='Trapezoid')
# # plt.plot(dates, ch13 , 'r-', label='Simpson')
# # plt.plot(dates, ch23 , 'o', label='Newton-Cotes')

# plt.grid(True)
# plt.show()
    
    
    
# =============================================================================
#     
#     # Trim new line character from end
#     if (current[11] == '\n'): 
#         current = current[:11]
#         print(current)
#     # commaSplit[i] = current
#     
#     current = current[:1]
#     print(current)
#     
# =============================================================================

