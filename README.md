# Setting up environment

## Installing `deno` on your machine
Refer to [docs](https://deno.land/manual/getting_started/installation)

e.g.
```bash
yay deno
# check install
deno --version
# optionally upgrade
sudo deno upgrade
```
Optionally follow the docs to setup your favorite IDE etc.

## Setup DB
Run `docker compose up -d`. This sets up a local Postgres 14 database with credentials `postgres:password` on port `5432`. Next, run Prisma migrations with `npx prisma migrate dev`.

Unfortunately that also means it will install `@prisma/client` and `prisma` packages, and inevitably creates `package.json` and `package-lock.json`

# Run the code
Here is where we run into trouble. According to [this issue](https://github.com/prisma/prisma/issues/2452), there really isn't a support for Deno in Prisma just yet. Some might have hacked it somehow to work but it's sketchy at best. 

I've tried to get it to work, following some of the snippets in the issue, but the most I get of it is `Not implemented: process.on("beforeExit")` and nothing else happens. See for yourself:

```bash
deno run --allow-env --allow-read index.ts
```

# Conclusion
TLDR - either I can't run it, or just simply not a viable combination at this moment. Personally I'd suggest using newest Node due to available ecosystem, despite its shortcomings.