# CSS

## Syntax

selector `.class` => 1 element can have multiple classes

selector `#id` => 1 element can have only 1 id

selector `*` => all elements

`element`

`element, element` => want both elements to have the same property

`element1 element2` => all element2 inside element1 gain the property

`element1 > element2` => all element2 with the parent to be element1

`element1 + element2` => the element2 parallelly after element1

pseudo class `:hover`

pseudo class`:last-child`

pseudo class`:first-child`

## Box Model

![image](../assets//box.png)

## Casecade (Importance >> Specificity >> Source Order)

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
