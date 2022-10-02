function alternateCase(s) {
  return s.replace(/[A-Z]/ig, e=> e.toUpperCase() === e? e.toLowerCase() : e.toUpperCase());
}
