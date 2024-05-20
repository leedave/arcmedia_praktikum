function Rezept()
{
    this.baseQty;
    var myClass = this;
    
    this.qtyPlus = function()
    {
        var qty = jQuery('#portionen').val();
        if (qty > 98) {
            return;
        }
        qty++;
        jQuery('#portionen').val(qty).change();
        //myClass.updateZutatenQtys();
    };
    
    this.qtyMinus = function()
    {
        var qty = jQuery('#portionen').val();
        if (qty < 2) {
            return;
        }
        qty--;
        jQuery('#portionen').val(qty).change();
        //myClass.updateZutatenQtys();
    };
    
    this.updateZutatenQtys = function()
    {
        jQuery('.zutatTable td.menge').each(function(index, item) {
            var content = jQuery(item).data('init');
            if (parseFloat(content)) {
                result = Math.ceil(((parseFloat(content) / myClass.baseQty) * parseInt(jQuery('#portionen').val()) * 10)) / 10;
                jQuery(item).html(result);
            } else {
                jQuery(item).addClass('red');
                console.log('not a number');
            }
        });
    };
    
    myClass.baseQty = parseInt(jQuery('#portionContainer').data('baseqty'));
    jQuery('#portionen').on('change', myClass.updateZutatenQtys).change();
}

var CMSSETTING = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
//            'underline',
            'link',
//            'fontColor',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'undo',
            'redo'
        ]
    },
    config: {
        width: 200
    },
    language: 'de-ch',
    licenseKey: ''
};

