module.exports = {
    module: {
        rules: [
            // ... другие правила опущены

            // это правило будет применяться к обычным файлам `.scss`
            // А ТАКЖЕ к секциям `<style lang="scss">` в файлах `.vue`
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // плагин опущен
}