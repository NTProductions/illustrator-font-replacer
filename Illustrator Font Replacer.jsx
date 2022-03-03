// illustrator font replacer

main();

function main() {
    var doc = app.activeDocument;
    
    for(var l = 0; l < doc.layers.length; l++) {
            if(doc.layers[l].textFrames.length > 0) {
                for(var ll = 0; ll < doc.layers[l].textFrames.length; ll++) {
                    textRange = doc.layers[l].textFrames[ll].textRange;
                    characterAttributes  = textRange.characterAttributes;
                    characterAttributes.textFont = randomFont();
                    }
                }
        }
    }

function randomFont() {
        var fonts = app.textFonts;
       
        var randInt = Math.floor(Math.random() * fonts.length-1);
        return fonts[randInt];
    }