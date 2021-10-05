import os

dependencies = open("dependencies.txt", "r")
for dependency in dependencies:
    print("attempting to install " + dependency) 
    os.system("npm install " + dependency)
    print("\nSuccessful install of " + dependency)





