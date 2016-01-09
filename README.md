# BCDS
Blockchain Commercial Draft System.

# setup frondend app

```
npm install antd-init -g
```

```
cd ./app
npm install
```

start dev server
```
npm run dev

```

now open at http://127.0.0.1:8989

# build contract
```
./generate
```

# deploy contract
```
truffle deploy
```
=======



----
run hydrachain
```
hydrachain -d ~/workspace/bcdsdir -c jsonrpc.corsdomain='http://127.0.0.1:8989' runlocal --num_validators=1 --seed=42
```

####hydrachain config

create some accounts
`hydrachain -d ~/workspace/bcdsdir account new`


show me the money through
vim ~/workspace/bcdsdir/genesis.json
