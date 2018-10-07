from bs4 import BeautifulSoup
import requests
import urllib3
import pandas as pd
import numpy as np
import csv
import os, ssl

def crawl(brk=True, max_counter=2):

    counter = 0
    base_url = "https://loanscan.io/?page="
    num = 1
    url = base_url + str(num)
    print(url)
    while counter < max_counter:
        r = requests.get(url, verify=False)
        print(counter)
        data = r.text
        soup = BeautifulSoup(data, "html.parser")
        print(soup.find_all("td"))
        if brk == True:
            counter += 1
        num += 1
        url = base_url + str(num)



