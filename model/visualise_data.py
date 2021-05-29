import sys
import numpy as np
import matplotlib as plt
import matplotlib.pyplot as pplt

f = open(sys.argv[1])
x = []
y = []
for i in f.readlines():
    xi, yi = map(float, i.split(","))
    x.append(xi)
    y.append(yi)

pplt.figure(figsize = (6, 6), dpi = 60)
x = np.array(x)
y = np.array(y)
pplt.scatter(x, y)
pplt.title(sys.argv[1])
pplt.show()
