# Development

## Build

``` bash
# install dependencies
$ npm install --only=production

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
$ npm run start-win #on windows

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Checkin dependencies for container
To ensure repetitive builds the container will use the values from `package-lock.json` and not from `package.json`
```
npm install --only=production
git add package-lock.json
git commit -m "new versions"
git push
``` 

## Installing new dependencies for production
```
npm install --only=production jquery@3.3.1 --save
```

## Others
```
#to upgrade dependencies
npm install -g npm-upgrade
npm-upgrade.cmd

#to list why a dependency is added
npm ls fsevents
```
