# Autocomplete Component

## Props Naming
- **onChange** -> `handleOptionChange`
- **onInputChange** -> `handleSearchChange`
- **options (Array<T>)** -> `filteredCountries` and `Countries`
- **filterOptions** -> `Countries.filter()`

## Controls
At a minimum, the component should be controllable via the following methods:

### Mouse
- Clicking on the component opens up the options window and focuses on the search input.
- Clicking on an option will (de)select the option.
- When the options window is open, clicking outside the component will cause the window to close and unfocus the search input.

### Keyboard
- Options can be iterated through via Up and Down Arrow Keys, and should "loop around" at the start and end. *(Note: this feature is currently incomplete)*
- Options can be (de)selected via the Enter Key. *(Note: this feature is currently incomplete)*
- The options window can be closed via the Escape Key. *(Note: this feature is currently incomplete)*
