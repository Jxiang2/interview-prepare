# CSS Workflow

### Casecade (Importance >> Specificity >> Source Order)

Author: css programmers write

User: css edited on browser dev tool

- Importance: User !important > **Author `!important` > Author** > User
- Specificity: inline >> id > class | pseudo class >> element | pseudo element.
  ![image](../assets/cascade.jpg)
- Source Order: order of css code

Summary:

- css classs declared with `!important` has highest priority
- inline styles always has priority over styles in `.css` files
- id is more specific than class e.g.`#btn{} >> .btn{}`
- class is more specific than element e.g.`.btn{} >> btn{}`
- Rely on specificity rather than order of selectors
- Pseudo classes should have higher specificity than original classes to make the effect occur e.g. `xxx:hover{} >> xxx{}` then we see the effect of hover

### Inheritance

Workflow:
![image](../assets/inherit.jpg)

Summary:

- Inheritance passes the values for some specific properties from parent to child
- Properties related to text ofent inherited: font-family font-size, color ...
