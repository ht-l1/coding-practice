# better solution
# The get() method is a built-in method for dictionaries in Python. It allows you to retrieve the value associated with a given key from the dictionary. 
# The method takes two parameters: (1) The key for which you want to retrieve the value. (2) An optional default value that the method will return if the key is not found in the dictionary.
#  get(language, 'Welcome') is used to look up the value associated with the language key in the dictionary.

def greet(language):
    return {
        'czech': 'Vitejte',
        'danish': 'Velkomst',
        'dutch': 'Welkom',
        'english': 'Welcome',
        'estonian': 'Tere tulemast',
        'finnish': 'Tervetuloa',
        'flemish': 'Welgekomen',
        'french': 'Bienvenue',
        'german': 'Willkommen',
        'irish': 'Failte',
        'italian': 'Benvenuto',
        'latvian': 'Gaidits',
        'lithuanian': 'Laukiamas',
        'polish': 'Witamy',
        'spanish': 'Bienvenido',
        'swedish': 'Valkommen',
        'welsh': 'Croeso'
    }.get(language, 'Welcome')


# my solution
def greet(language):
    # Check if the input is a string
    if not isinstance(language, str):
        return "Welcome"

    # database of languages of greeting
    language_database = [
        ("english", "Welcome"),
        ("czech", "Vitejte"),
        ("danish", "Velkomst"),
        ("dutch", "Welkom"),
        ("estonian", "Tere tulemast"),
        ("finnish", "Tervetuloa"),
        ("flemish", "Welgekomen"),
        ("french", "Bienvenue"),
        ("german", "Willkommen"),
        ("irish", "Failte"),
        ("italian", "Benvenuto"),
        ("latvian", "Gaidits"),
        ("lithuanian", "Laukiamas"),
        ("polish", "Witamy"),
        ("spanish", "Bienvenido"),
        ("swedish", "Valkommen"),
        ("welsh", "Croeso"),
    ]
    
    # convert to lower case for case-insensitive
    language = language.lower()
    
    # check if in the database
    # lang (first element) and greeting (second element) are used to iterate
    for lang, greeting in language_database:
        if lang == language:
            return greeting
    
    # default to English for unkown 
    return "Welcome"
