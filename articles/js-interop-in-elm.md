# JS Interop with Elm

## The basics

### Attaching compiled elm to the DOM

```js

let element = document.getElementById('#app');

Elm.Main.embed(element);

//or

Elm.Main.fullscreen();

```

### Passing flags

```js

let element = document.getElementById('#app');

Elm.Main.embed(element, {
  session: {
    presence: "Away",
  }
});

//or

Elm.Main.fullscreen({
  session: {
    presence: "Away",
  }
});
```

### Parsing flags

#### Value vs implied parse
```elm
  init : Session -> (Model, Cmd Msg)
```

What happens when session data is invalid? 

```elm
  init : Value -> (Model, Cmd Msg)
```

What happens when input data is invalid?

  
## Ports

- How many ports to create?
  - One in, one out
- Port message structure
- Handling messages in JS
  - case...
  - Watch out for exceptions
- Sending messages back to Elm


## Parsing gotchas

- Watch out for undefined

## Dom events? 

## Integration with libraries

- Functional style (flickr/justified-layout)
- Stateful
- DOM-bound UI widgets
