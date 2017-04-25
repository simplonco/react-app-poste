# React App

Pour faire un projet avec create-react-app dans votre terminal.

```
npm install -g create-react-app

create-react-app <NOM-DE-MON-APP>
cd <NOM-DE-MON-APP>/
npm start
```

Il faut ensuite changer les fichier dans app/src.

## Component simple et lifecycle

Syntaxe d'un component simple :

```
import React, { Component } from 'react';

class <COMPONENT-NAME> extends Component {
  render () {
    return (
      <div className="<COMPONENT-CLASS>"></div>
    )
  }
}

export default <COMPONENT-NAME>;
```
Plus d'informations dans les dossiers app/src/Test

## Data-binding

React permet de passer des données de père en fils.
Comment contourner ce problème et passer des données d'un enfant vers le parent ou entre sibling ?
On prend 3 components : Parent, ChildA, ChildB.


Je crée une variable dans le state du Parent.
```
  state = { myValue : true }
```

Je la passe à ChildA via une props (attribut)
```
<ChildA valueName={this.state.myValue}></ChildA>
```

Je crée une function dans Parent qui sera passé à ChildB via une props également.

```
<ChildB functionName={this.myFunction}></ChildB>
```

Cette function va changer la variable myValue du state du Parent.

```
myFunction () {
  this.setState({ myValue: false });
}
```

J'appelle cette fonction dans un élément du render de ChildA.
```
<div onClick={this.props.functionName}></div>
```

==========================================================
Essayez de trouver dans les images suivantes des :

1. Conditions / Conséquences
2. Répétitions
3. Exceptions

### Facebook
![facebook](readme/facebook.png)
=============================
### Twitter
![facebook](readme/twitter.png)
=============================
### Youtube
![facebook](readme/youtube.png)
=============================
### Player
![facebook](readme/player.png)
=============================
### Soundcloud
![facebook](readme/soundcloud.png)
=============================
### Pinterest
![facebook](readme/pinterest.png)
=============================
### Blog
![facebook](readme/blog.png)
