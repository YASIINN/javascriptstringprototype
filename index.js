String.prototype.interpolation = function (value) {
    //stringin örneğinin alınması
    let _this = this;
    //* Hiç olmayabilir veya birden fazla tekrarlı kullanım
    //. Boşluk olmayan tüm karakterler
    //? Opsiyonel (0 veya 1 kez tekrarlı) kullanım
    //g Tümünde Arama
    //i Büyük Küçük Harf Duyarsız
    // kıvırcık parantezlerin bulunması boşluk olmayan karakterlerde bir yada daha fazla olabilir
    let result = _this.match(/{{(.*?)}}/gi);
    // ilgili regex uyan bir sonuç  bulunamadıysa yada gelen bir değer yoksa stringi geri dönder
    if (result === null || value === undefined) {
        return _this;
    } else {
        //bulunan sonuç üzerinde dön
        result.forEach((stringItem) => {
            //stringin örneğinin alınması
            let source = stringItem;

            //fonksiyon içerip içermemesi fonksiyon tanımlarının parentez ile yapılmasına göre
            if (stringItem.indexOf('(') == -1 && stringItem.indexOf(')') == -1) {

                //gelen elemanın keyini bul
                let stringResult = []
                stringResult.push(stringItem.slice(stringItem.length - (stringItem.length - 2), stringItem.length - 2).trim())
                //elemanın key bulunduktan sonra ilgili eleman üzerinde foreach ile döngü açımı
                stringResult.forEach((string) => {
                    let replacedItem = ""
                    //matematiksel bir işlem olup olmadığının kontrolü
                    if (string.indexOf('+') != -1 || string.indexOf('/') !=-1 || string.indexOf('-') != -1 || string.indexOf('*') != -1) {
                        let valueKeys = Object.keys(value)
                        //objenin key lerini bul
                        for (let i = 0; i < valueKeys.length; i++) {
                            if (string.indexOf(valueKeys[i]) != -1) {
                                //stringin içerisindeki keyleri objedeki keylerin değeri ile değiştir
                                string = string.replace(valueKeys[i], value[valueKeys[i]])
                            }
                        }
                        //matematiksel işlemi yap
                        stringItem = eval(string).toString()

                    } else {
                        //matematiksel işlem değilse string interpolition yapılmaktadır
                        //string içindeki key ile parametre olarak gelen değerin keyinin değiştirilmesi
                        replacedItem = stringItem.replace(string, value[string]);
                        //kıvırcık parantezlerin silinmesi
                        replacedItem = replacedItem.replace(/{{/g, '')
                        replacedItem = replacedItem.replace(/}}/g, '')
                        //boşlukarın temizlenmesi
                        stringItem = replacedItem.trim();
                    }

                })


            } else {
                debugger
                //parentezlere göre ayrılması
                let functionName = stringItem.split('(');
                /*fonksiyonun bulunması için ayrılan elemanların ilkinde
                * sum örneği için {{ sum , s1,s2) }} şeklinde çıkan sonuçtan
                * kıvırcık parantezlerin silinmesi
                *  */
                functionName = functionName[0].replace(/{{/gi, '').trim();
                /*     functionName = functionName.replace(/}}/gi, '').trim();
                     functionName = functionName.trim();*/
                debugger

                //* Hiç olmayabilir veya birden fazla tekrarlı kullanım
                //. Boşluk olmayan tüm karakterler
                //? Opsiyonel (0 veya 1 kez tekrarlı) kullanım
                // Fonkisyon parantezlerinin   bulunması boşluk olmayan karakterlerde bir yada daha fazla olabilir
                //g Tümünde Arama
                //i Büyük Küçük Harf Duyarsız
                // ( parantezler için kaçış işareti
                let result = stringItem.match(/(\(.*?)\)/gi);
                debugger
                //eşlen kaydın üzerinde dönülmesi
                result.forEach((functionItem) => {
                    debugger
                    /* örnekteki sum fonksiyonu için 
                    *sum(s1,s2) (s1,s2) için parantezlerin
                    *boşluk karakteri ile değiştirilmesi
                    */
                    functionItem = functionItem.replace(/\(/gi, '');
                    functionItem = functionItem.replace(/\)/gi, '');
                    debugger
                    debugger
                    //fonksiyona gelen parametrelerin bulunması (s1,s2) [s1,s2]
                    let parameters = functionItem.split(',');
                    debugger
                    debugger
                    let numbers = []
                    parameters.forEach((param) => {
                        //boşlukların silinmesi
                        param = param.trim();
                        //sayısal değerlerin bulunması
                        numbers.push(+value[param])
                        //string içindeki key ile parametre olarak gelen değerin keyinin değiştirilmesi
                        functionItem = functionItem.replace(param, value[param]);
                        debugger
                    });
                    //stringdeki fonksiyonun uygulanması
                    //... sayıları içerin array içindeki elemanların aktarılaması
                    stringItem = stringItem.replace(source, eval(value[functionName](...numbers)));

                });
            }
            //stringin örneğinin değiştirilmiş  string ile değiştir
            _this = _this.replace(source, stringItem);
        });
    }
    //string geri dönder
    return _this;

}
