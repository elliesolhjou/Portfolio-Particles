const setTheme = (currentTheme) => {
  console.log(currentTheme);
  console.log(document.styleSheets);

  const selectedCssProps = Array.from(document.styleSheets).reduce(
    (prevStyleSheet, currStyleSheet) => {
      // Here we're concatenating the previous CSS rules with the current ones.
      const cssRulesArray = Array.from(currStyleSheet.cssRules).reduce(
        (prevCssRule, currCssRule) => {
          // Check if the current CSS rule is for ':root' and has the desired properties.
          if (currCssRule.selectorText === ":root") {
            // Concatenate the array with the properties that start with '--selected'.
            return prevCssRule.concat(
              ...Array.from(currCssRule.style).filter((item) =>
                item.startsWith("--selected")
              )
            );
          }
          return prevCssRule; // Return previous CSS rule if no ':root' selector.
        },
        []
      );

      return prevStyleSheet.concat(cssRulesArray); // Concatenate with previous stylesheets' rules.
    },
    []
  ); // Initial value is an empty array.

  console.log(selectedCssProps);
  // Depending on what you want to do with selectedCssProps, you might want to return them or perform an action here.
  selectedCssProps.forEach((value) => {
    // console.log(document.documentElement.style.setProperty(value, `var(--${currentTheme})`))
    document.documentElement.style.setProperty(
      value,
      `var(--${currentTheme}${value.substring(10)})`
    );
  });
};

// setTheme('dark'); // Example usage.

export default setTheme;
