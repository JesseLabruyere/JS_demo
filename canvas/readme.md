# File Structure

```
/demo
	/css
		/shared
	/js
		/shared
			/unity-web-compat_src
	/res
		/images
		/unity
	/scripts
```

# Team Invoer #

Hieronder staat de documentatie van ons deel van Roomz.

### Bestanden index ###

1. css/canvas.css
2. images
3. js/createTextInput.js
4. js/menu.js
5. js/saveImage.js

6. lib/jquery.js
7. lib/undoRedoStack.js

8. saveImage.php
9. index.html


### 1. canvas.css ###

* De canvas CSS is gesplitst in twee gedeeltes. Namelijk het menu linksboven en de rest van het canvas (menuwaaier etc.).

* De CSS sheet is voorzien van twee comment titels om de twee verschillende gedeeltes aan te duiden.

### 2. images ###

* In deze map staan alle gebruikte afbeeldingen. Momenteel zijn dat alleen de icoontjes van de menuwaaier en het menu linksboven.

### 3. createTextInput.js ###

* Bevat een functie die in js/menu.js wordt ingeladen. 
* De functie maakt een textarea aan met een eigen Undo - Redo stack waardoor alle textareas apart van elkaar een invoergeschiedenis hebben

* * NOTE: de Undo - Redo stack is afhankelijk van een library die staat in lib/undoRedoStack.js. Deze library doet niks anders dan het bijhouden van de wijzigingen van de textareas.

### 4. menu.js ###

* Dit bestand bevat alle codes die de menuwaaier aanmaken en beïnvloeden.
* In de comments staat uitgelegd wat elk onderdeel van de code voorstelt en wat het doet.

### 5. saveImage.js ###

* Hier staat een Ajax request in naar een PHP bestand dat ervoor zorgt dat je een afbeelding kan uploaden.
* Deze saveImage wordt aangeroepen in de menu.js

### 6. jquery.js ###

* Dit is de jQuery library die we lokaal hebben opgeslagen zodat deze ook werkt zonder dat de gebruiker internet heeft (Bauke wilt offline kunnen werken, dus dit is NOODZAKELIJK!!)

### 7. undoRedoStack.js ###

* Dit is de library die ervoor zorgt dat er een Undo - Redo stack voor iedere textarea aangemaakt kan worden. 
* Deze library wordt aangeroepen in de createTextInput.js.

### 8. saveImage.php ###

* Dit PHP bestand wordt aangeroepen in de saveImage.js en zorgt ervoor dat de afbeelding daadwerkelijk wordt geüpload.

### 9. index.html ###

Dit is de code waarmee de menubalk linksboven kan worden weergegeven (Uiteraard in combinatie met de CSS).

```
#!HTML

    <nav>
      <ul>
      	<a href="#"><li id="user"></li></a>
        <a href="#"><li id="camera"></li></a>
        <a href="#"><li id="text"></li></a>
        <a href="#"><li id="settings"></li></a>
        <a href="#"><li id="video"></li></a>
        <a href="#"><li id="switch"></li></a>
        <a href="#"><li id="help"></li></a>
        
        <li id="search-bar"><input name="search" type="text" placeholder="Search..."></li>
      	<a href="#"><li id="search"></li></a>

      </ul>
    </nav>

```

Dit stuk code laadt de canvas in. Deze div is erg belangrijk omdat al onze javascript/jQuery hierop zijn gebaseerd en hier dus gebruik van maken.

```
#!HTML

<div id="canvas"></div>

```

Dit stuk code is noodzakelijk voor het laten functioneren van saveImage.php en saveImage.js

```
#!HTML

 <form id="myForm">
    <input type="file" name="image" id="imageBrowse" accept="image/*">
</form>

```

Het menu triggert het formulier met de tweede optie waarna je een bestand lokaal kan kiezen,
Wanneer je dit hebt gedaan wordt het gekozen bestand door middel van saveImage.js opgestuurd naar saveImage.php waar wordt gecontroleerd of het bestandstype een afbeelding is.  
Ook wordt gecontroleerd of het gekozen bestand niet te groot is. 
Op het moment dat het bestand is goedgekeurd wordt dit toegevoegd aan het canvas en lokaal opgeslagen in het mapje uploads.

Volgorde van het inladen van de javascript bestanden:


```
#!HTML

<script src="lib/jquery.js"></script>
<script src="lib/undoRedoStack.js"></script>

<script src="js/createTextInput.js"></script>
<script src="js/menu.js"></script>
<script src="js/saveImage.js"></script>

```

NOTE: Dit is de noodzakelijke code van de index.html, de rest van dit bestand is niet noodzakelijk voor de werking van ons deel van het systeem.


# Team 3D #

# Unity Web Compatibility Library

Deze library kan worden gebruikt om na te gaan of de browser NPAPI ondersteuning heeft, en dus ondersteuning voor Unity Web Player heeft.

## Inhoudsopgave

1. [Installatie](#install)
2. [Gebruik](#usage)
3. [Werking](#process)



### Installatie <a name="install">

Sluit `unity-web-compat.min.js` in in je HTML pagina. Verder hoeft er niets gedaan te worden.



### Gebruik <a name="usage">

Er wordt een object gemaakt in de global namespace, hier in staan de volgende functies functies.

Het idee is dat in het geval van project Roomz de 'switch to 3D' knop gedisabled wordt als de browser niet compatibel is met Unity Web Player, en dat er dan een nieuwe knop verschijnt waarmee de gebruiker de externe applicatie kan downloaden (of in het begin een demo kan bekijken).

#### .isUnityWebCompatible() : boolean

Deze methode kijkt naar je browswer versie en bepaald of deze ondersteuning heeft voor NPAPI, dit is een oudere techniek en zal steeds minder ondersteund worden. Helaas is dit wel nodig voor Unity Web Player.

```javascript
    if ( webCompat.isUnityWebCompatible() )
    {
        $("#3d_button").show();
    } else {
        $("#3d_button").hide();
    }
```

#### .getBrowserName() : string

Deze methode haalt de browser naam op.

#### .getBrowserVersion() : int

Deze methode haalt de browser versie op.
