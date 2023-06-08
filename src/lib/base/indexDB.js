import Dexie from 'dexie';
import { Account, Transaction, Category, Project, Params } from '../models';

// tuto : https://dexie.org/docs/Tutorial/Svelte
export const db = new Dexie('myDatabase');
db.version(1.1).stores({
  accounts: Account.dexieDefinition,
  transactions: Transaction.dexieDefinition,
  categories: Category.dexieDefinition,
  projects: Project.dexieDefinition,
  params: Params.dexieDefinition,
});

db.open();
db.on("ready", function () {
  // Create default params if not exist
  db.params.get(Params.userId).then((params) => {
    if (!params) {
      db.params.add(new Params(Params.userId));
    }
  });
});