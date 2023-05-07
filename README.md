# DrugOverflow

## Getting Started

```sh
cd drugoverflow
npm install
echo "SUPABASE_SERVICE_ROLE_KEY=<supabase_service_role_key>" >> .env.local
npm run dev
```

## Troubleshooting

When running `npm run dev`:

```text
Module not found: Can't resolve 'encoding' in '/Users/etienne/work/drugoverflow/node_modules/node-fetch/lib'
```

<https://github.com/supabase/supabase-js/issues/612>
