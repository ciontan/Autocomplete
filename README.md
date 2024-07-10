# Autocomplete props naming
onChange -> handleOptionChange
onInputChange -> handleSearchChange
options(Array<T>) -> filteredCountries and Countries
filterOptions -> Countries.filter()

Controls
At minimum, the component should be able to be controlled via the following controls:
● Mouse
○ Clicking on the component opens up the options window and focuses on the
search input.
○ Clicking on an option will (de)select the option.
○ When the options window is open, clicking outside the component will cause
the window to close and unfocus the search input.

● Keyboard
○ Options can be iterated through via Up and Down Arrow Keys, and should be
“loop around” at the start and end. (unable to complete this)
○ Option can be (de)selected via the Enter Key. (unable to complete this)
○ The options window can be closed via the Escape Key. (unable to complete this)
