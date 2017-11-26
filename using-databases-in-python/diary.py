import datetime
from collections import OrderedDict
from peewee import *

db = SqliteDatabase('diary.db')


class Entry(Model):
    content = TextField()
    timestamp = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = db


def initialize():
    """Create the databse and the tab;e if they don't exist."""
    db.connect()
    db.create_tables([Entry], safe=True)


def menu_loop():
    """Show the menu"""
    choice = None

    # infinite loop
    while choice != 'q':
        # tell user how to quit program
        print("Enter 'q' to quit.")
        # for each key, value pair in the menu variable,
        for key, value in menu.items():
            # print the key and the docstring of the value (__doc__ returns the docstring of the names function held in value)
            print("{}) {}".format(key, value.__doc__))
        # set choice to the user's input, set it all to lower case, and strip it of any spaces
        choice = input("Action: ").lower().strip()

        # if the users choice is in menu
        if choice in menu:
            # execute the function named in the tuple of the menu variable (held as an OrderedDict)
            menu[choice]()


def add_entry():
    """Add an entry"""


def view_entries():
    """View previous entries."""


def delete_entry():
    """Delete an entry."""


menu = OrderedDict([
    ('a', add_entry),
    ('b', view_entries),
    ('c', delete_entry)
])

if __name__ == "__main__":
    initialize()
    menu_loop()
