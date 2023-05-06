const text_area = document.getElementById("text-area");

const bold = document.getElementById('bold-btn');

bold.addEventListener('click' , function() {
    const selection = window.getSelection();
    
    const range = selection.getRangeAt(0);

    const span = document.createElement('span');
    
    span.style.fontWeight = 'bold';
    
    span.appendChild(range.extractContents());

    range.insertNode(span);
    
    selection.removeAllRanges();
    
    selection.addRange(range);
})

const italic = document.getElementById('italic-btn');

italic.addEventListener('click' , function() {
    const selection = window.getSelection();
    
    const range = selection.getRangeAt(0);

    const span = document.createElement('span');
    
    span.style.fontStyle = 'italic';
    
    span.appendChild(range.extractContents());

    range.insertNode(span);
    
    selection.removeAllRanges();
    
    selection.addRange(range);
})

const underline = document.getElementById('underline-btn');

underline.addEventListener('click' , function() {
    const selection = window.getSelection();
    
    const range = selection.getRangeAt(0);

    const span = document.createElement('span');
    
    span.style.textDecoration = 'underline';

    span.appendChild(range.extractContents());

    range.insertNode(span);
    
    selection.removeAllRanges();
    
    selection.addRange(range);
})

// text align
const leftAlign = document.getElementById('left-align-btn');

leftAlign.addEventListener('click' , function() {
    text_area.style.textAlign = 'left'
})

const centerAlign = document.getElementById('center-align-btn');

centerAlign.addEventListener('click' , function() {
    text_area.style.textAlign = 'center'
})

const rightAlign = document.getElementById('right-align-btn');

rightAlign.addEventListener('click' , function() {
    text_area.style.textAlign = 'right'
 })

const fontSizeSelector = document.getElementById('font-size-select');

fontSizeSelector.addEventListener('change', function() {
    const selection = window.getSelection();

    const range = selection.getRangeAt(0);

    const span = document.createElement('span');

    span.style.fontSize = this.value;

    span.appendChild(range.extractContents());

    range.insertNode(span);

    selection.removeAllRanges();

    selection.addRange(range);
  });

const fontColor = document.getElementById('font-color');

fontColor.addEventListener('change', function() {
    const selection = window.getSelection();

    const range = selection.getRangeAt(0);

    const span = document.createElement('span');

    span.style.color = this.value;

    span.appendChild(range.extractContents());

    range.insertNode(span);

    selection.removeAllRanges();

    selection.addRange(range);
});

