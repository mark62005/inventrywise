/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Product
 *
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>;
/**
 * Model Sale
 *
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>;
/**
 * Model Purchase
 *
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>;
/**
 * Model Expense
 *
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>;
/**
 * Model SalesSummary
 *
 */
export type SalesSummary =
	$Result.DefaultSelection<Prisma.$SalesSummaryPayload>;
/**
 * Model PurchaseSummary
 *
 */
export type PurchaseSummary =
	$Result.DefaultSelection<Prisma.$PurchaseSummaryPayload>;
/**
 * Model ExpenseSummary
 *
 */
export type ExpenseSummary =
	$Result.DefaultSelection<Prisma.$ExpenseSummaryPayload>;
/**
 * Model ExpenseByCategory
 *
 */
export type ExpenseByCategory =
	$Result.DefaultSelection<Prisma.$ExpenseByCategoryPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
	ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	U = "log" extends keyof ClientOptions
		? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
			? Prisma.GetEvents<ClientOptions["log"]>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

	/**
	 * ##  Prisma Client ʲˢ
	 *
	 * Type-safe database client for TypeScript & Node.js
	 * @example
	 * ```
	 * const prisma = new PrismaClient()
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 *
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
	 */

	constructor(
		optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
	);
	$on<V extends U>(
		eventType: V,
		callback: (
			event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
		) => void
	): PrismaClient;

	/**
	 * Connect with the database
	 */
	$connect(): $Utils.JsPromise<void>;

	/**
	 * Disconnect from the database
	 */
	$disconnect(): $Utils.JsPromise<void>;

	/**
	 * Add a middleware
	 * @deprecated since 4.16.0. For new code, prefer client extensions instead.
	 * @see https://pris.ly/d/extensions
	 */
	$use(cb: Prisma.Middleware): void;

	/**
	 * Executes a prepared raw query and returns the number of affected rows.
	 * @example
	 * ```
	 * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Executes a raw query and returns the number of affected rows.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>;

	/**
	 * Performs a raw query and returns the `SELECT` data.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<T>;

	/**
	 * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
	 * @example
	 * ```
	 * const [george, bob, alice] = await prisma.$transaction([
	 *   prisma.user.create({ data: { name: 'George' } }),
	 *   prisma.user.create({ data: { name: 'Bob' } }),
	 *   prisma.user.create({ data: { name: 'Alice' } }),
	 * ])
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
	 */
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

	$transaction<R>(
		fn: (
			prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
		) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		}
	): $Utils.JsPromise<R>;

	$extends: $Extensions.ExtendsHook<
		"extends",
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs;
			}
		>
	>;

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.product`: Exposes CRUD operations for the **Product** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Products
	 * const products = await prisma.product.findMany()
	 * ```
	 */
	get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Sales
	 * const sales = await prisma.sale.findMany()
	 * ```
	 */
	get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Purchases
	 * const purchases = await prisma.purchase.findMany()
	 * ```
	 */
	get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Expenses
	 * const expenses = await prisma.expense.findMany()
	 * ```
	 */
	get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.salesSummary`: Exposes CRUD operations for the **SalesSummary** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more SalesSummaries
	 * const salesSummaries = await prisma.salesSummary.findMany()
	 * ```
	 */
	get salesSummary(): Prisma.SalesSummaryDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.purchaseSummary`: Exposes CRUD operations for the **PurchaseSummary** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more PurchaseSummaries
	 * const purchaseSummaries = await prisma.purchaseSummary.findMany()
	 * ```
	 */
	get purchaseSummary(): Prisma.PurchaseSummaryDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.expenseSummary`: Exposes CRUD operations for the **ExpenseSummary** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more ExpenseSummaries
	 * const expenseSummaries = await prisma.expenseSummary.findMany()
	 * ```
	 */
	get expenseSummary(): Prisma.ExpenseSummaryDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.expenseByCategory`: Exposes CRUD operations for the **ExpenseByCategory** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more ExpenseByCategories
	 * const expenseByCategories = await prisma.expenseByCategory.findMany()
	 * ```
	 */
	get expenseByCategory(): Prisma.ExpenseByCategoryDelegate<
		ExtArgs,
		ClientOptions
	>;
}

export namespace Prisma {
	export import DMMF = runtime.DMMF;

	export type PrismaPromise<T> = $Public.PrismaPromise<T>;

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator;

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
	export import PrismaClientValidationError = runtime.PrismaClientValidationError;

	/**
	 * Re-export of sql-template-tag
	 */
	export import sql = runtime.sqltag;
	export import empty = runtime.empty;
	export import join = runtime.join;
	export import raw = runtime.raw;
	export import Sql = runtime.Sql;

	/**
	 * Decimal.js
	 */
	export import Decimal = runtime.Decimal;

	export type DecimalJsLike = runtime.DecimalJsLike;

	/**
	 * Metrics
	 */
	export type Metrics = runtime.Metrics;
	export type Metric<T> = runtime.Metric<T>;
	export type MetricHistogram = runtime.MetricHistogram;
	export type MetricHistogramBucket = runtime.MetricHistogramBucket;

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs;
	export import getExtensionContext = runtime.Extensions.getExtensionContext;
	export import Args = $Public.Args;
	export import Payload = $Public.Payload;
	export import Result = $Public.Result;
	export import Exact = $Public.Exact;

	/**
	 * Prisma Client JS version: 6.6.0
	 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
	 */
	export type PrismaVersion = {
		client: string;
	};

	export const prismaVersion: PrismaVersion;

	/**
	 * Utility Types
	 */

	export import JsonObject = runtime.JsonObject;
	export import JsonArray = runtime.JsonArray;
	export import JsonValue = runtime.JsonValue;
	export import InputJsonObject = runtime.InputJsonObject;
	export import InputJsonArray = runtime.InputJsonArray;
	export import InputJsonValue = runtime.InputJsonValue;

	/**
	 * Types of the values used to represent different kinds of `null` values when working with JSON fields.
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	namespace NullTypes {
		/**
		 * Type of `Prisma.DbNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class DbNull {
			private DbNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.JsonNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class JsonNull {
			private JsonNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.AnyNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class AnyNull {
			private AnyNull: never;
			private constructor();
		}
	}

	/**
	 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const DbNull: NullTypes.DbNull;

	/**
	 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const JsonNull: NullTypes.JsonNull;

	/**
	 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const AnyNull: NullTypes.AnyNull;

	type SelectAndInclude = {
		select: any;
		include: any;
	};

	type SelectAndOmit = {
		select: any;
		omit: any;
	};

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> =
		T extends PromiseLike<infer U> ? U : T;

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<
		T extends (...args: any) => $Utils.JsPromise<any>,
	> = PromiseType<ReturnType<T>>;

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	export type Enumerable<T> = T | Array<T>;

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
	}[keyof T];

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
	};

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

	/**
	 * Subset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
	 */
	export type Subset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	};

	/**
	 * SelectSubset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
	 * Additionally, it validates, if both select and include are present. If the case, it errors.
	 */
	export type SelectSubset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & (T extends SelectAndInclude
		? "Please either choose `select` or `include`."
		: T extends SelectAndOmit
			? "Please either choose `select` or `omit`."
			: {});

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & K;

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T;

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> =
		T extends Array<any>
			? False
			: T extends Date
				? False
				: T extends Uint8Array
					? False
					: T extends BigInt
						? False
						: T extends object
							? True
							: False;

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

	/**
	 * From ts-toolbelt
	 */

	type __Either<O extends object, K extends Key> = Omit<O, K> &
		{
			// Merge all but K
			[P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
		}[K];

	type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

	type EitherLoose<O extends object, K extends Key> = ComputeRaw<
		__Either<O, K>
	>;

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>;
		0: EitherLoose<O, K>;
	}[strict];

	type Either<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = O extends unknown ? _Either<O, K, strict> : never;

	export type Union = any;

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
	} & {};

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (
		U extends unknown ? (k: U) => void : never
	) extends (k: infer I) => void
		? I
		: never;

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
	} & {};

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>;
			}
		>
	>;

	type Key = string | number | symbol;
	type AtBasic<O extends object, K extends Key> = K extends keyof O
		? O[K]
		: never;
	type AtStrict<O extends object, K extends Key> = O[K & keyof O];
	type AtLoose<O extends object, K extends Key> = O extends unknown
		? AtStrict<O, K>
		: never;
	export type At<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = {
		1: AtStrict<O, K>;
		0: AtLoose<O, K>;
	}[strict];

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
				[K in keyof A]: A[K];
			} & {};

	export type OptionalFlat<O> = {
		[K in keyof O]?: O[K];
	} & {};

	type _Record<K extends keyof any, T> = {
		[P in K]: T;
	};

	// cause typescript not to expand types and preserve names
	type NoExpand<T> = T extends unknown ? T : never;

	// this type assumes the passed object is entirely optional
	type AtLeast<O extends object, K extends string> = NoExpand<
		O extends unknown
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
			: never
	>;

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never;

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

	/**
  A [[Boolean]]
  */
	export type Boolean = True | False;

	// /**
	// 1
	// */
	export type True = 1;

	/**
  0
  */
	export type False = 0;

	export type Not<B extends Boolean> = {
		0: 1;
		1: 0;
	}[B];

	export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
		? 0 // anything `never` is false
		: A1 extends A2
			? 1
			: 0;

	export type Has<U extends Union, U1 extends Union> = Not<
		Extends<Exclude<U1, U>, U1>
	>;

	export type Or<B1 extends Boolean, B2 extends Boolean> = {
		0: {
			0: 0;
			1: 1;
		};
		1: {
			0: 1;
			1: 1;
		};
	}[B1][B2];

	export type Keys<U extends Union> = U extends unknown ? keyof U : never;

	type Cast<A, B> = A extends B ? A : B;

	export const type: unique symbol;

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never;
			}
		: never;

	type FieldPaths<
		T,
		U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
	> = IsObject<T> extends True ? U : T;

	type GetHavingFields<T> = {
		[K in keyof T]: Or<
			Or<Extends<"OR", K>, Extends<"AND", K>>,
			Extends<"NOT", K>
		> extends True
			? // infer is only needed to not hit TS limit
				// based on the brilliant idea of Pierre-Antoine Mills
				// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
				T[K] extends infer TK
				? GetHavingFields<
						UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
					>
				: never
			: {} extends FieldPaths<T[K]>
				? never
				: K;
	}[keyof T];

	/**
	 * Convert tuple to union
	 */
	type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
	type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
	type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

	/**
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<
		T,
		K extends Enumerable<keyof T> | keyof T,
	> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
		? never
		: T;

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>;

	export const ModelName: {
		User: "User";
		Product: "Product";
		Sale: "Sale";
		Purchase: "Purchase";
		Expense: "Expense";
		SalesSummary: "SalesSummary";
		PurchaseSummary: "PurchaseSummary";
		ExpenseSummary: "ExpenseSummary";
		ExpenseByCategory: "ExpenseByCategory";
	};

	export type ModelName = (typeof ModelName)[keyof typeof ModelName];

	export type Datasources = {
		db?: Datasource;
	};

	interface TypeMapCb<ClientOptions = {}>
		extends $Utils.Fn<
			{ extArgs: $Extensions.InternalArgs },
			$Utils.Record<string, any>
		> {
		returns: Prisma.TypeMap<
			this["params"]["extArgs"],
			ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
		>;
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions;
		};
		meta: {
			modelProps:
				| "user"
				| "product"
				| "sale"
				| "purchase"
				| "expense"
				| "salesSummary"
				| "purchaseSummary"
				| "expenseSummary"
				| "expenseByCategory";
			txIsolationLevel: Prisma.TransactionIsolationLevel;
		};
		model: {
			User: {
				payload: Prisma.$UserPayload<ExtArgs>;
				fields: Prisma.UserFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateUser>;
					};
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>;
						result: $Utils.Optional<UserGroupByOutputType>[];
					};
					count: {
						args: Prisma.UserCountArgs<ExtArgs>;
						result: $Utils.Optional<UserCountAggregateOutputType> | number;
					};
				};
			};
			Product: {
				payload: Prisma.$ProductPayload<ExtArgs>;
				fields: Prisma.ProductFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.ProductFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
					};
					findFirst: {
						args: Prisma.ProductFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
					};
					findMany: {
						args: Prisma.ProductFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
					};
					create: {
						args: Prisma.ProductCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
					};
					createMany: {
						args: Prisma.ProductCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
					};
					delete: {
						args: Prisma.ProductDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
					};
					update: {
						args: Prisma.ProductUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
					};
					deleteMany: {
						args: Prisma.ProductDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.ProductUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
					};
					upsert: {
						args: Prisma.ProductUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
					};
					aggregate: {
						args: Prisma.ProductAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateProduct>;
					};
					groupBy: {
						args: Prisma.ProductGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ProductGroupByOutputType>[];
					};
					count: {
						args: Prisma.ProductCountArgs<ExtArgs>;
						result: $Utils.Optional<ProductCountAggregateOutputType> | number;
					};
				};
			};
			Sale: {
				payload: Prisma.$SalePayload<ExtArgs>;
				fields: Prisma.SaleFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.SaleFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload>;
					};
					findFirst: {
						args: Prisma.SaleFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload>;
					};
					findMany: {
						args: Prisma.SaleFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload>[];
					};
					create: {
						args: Prisma.SaleCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload>;
					};
					createMany: {
						args: Prisma.SaleCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload>[];
					};
					delete: {
						args: Prisma.SaleDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload>;
					};
					update: {
						args: Prisma.SaleUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload>;
					};
					deleteMany: {
						args: Prisma.SaleDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.SaleUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload>[];
					};
					upsert: {
						args: Prisma.SaleUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalePayload>;
					};
					aggregate: {
						args: Prisma.SaleAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateSale>;
					};
					groupBy: {
						args: Prisma.SaleGroupByArgs<ExtArgs>;
						result: $Utils.Optional<SaleGroupByOutputType>[];
					};
					count: {
						args: Prisma.SaleCountArgs<ExtArgs>;
						result: $Utils.Optional<SaleCountAggregateOutputType> | number;
					};
				};
			};
			Purchase: {
				payload: Prisma.$PurchasePayload<ExtArgs>;
				fields: Prisma.PurchaseFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.PurchaseFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload>;
					};
					findFirst: {
						args: Prisma.PurchaseFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload>;
					};
					findMany: {
						args: Prisma.PurchaseFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[];
					};
					create: {
						args: Prisma.PurchaseCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload>;
					};
					createMany: {
						args: Prisma.PurchaseCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[];
					};
					delete: {
						args: Prisma.PurchaseDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload>;
					};
					update: {
						args: Prisma.PurchaseUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload>;
					};
					deleteMany: {
						args: Prisma.PurchaseDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.PurchaseUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[];
					};
					upsert: {
						args: Prisma.PurchaseUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchasePayload>;
					};
					aggregate: {
						args: Prisma.PurchaseAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregatePurchase>;
					};
					groupBy: {
						args: Prisma.PurchaseGroupByArgs<ExtArgs>;
						result: $Utils.Optional<PurchaseGroupByOutputType>[];
					};
					count: {
						args: Prisma.PurchaseCountArgs<ExtArgs>;
						result: $Utils.Optional<PurchaseCountAggregateOutputType> | number;
					};
				};
			};
			Expense: {
				payload: Prisma.$ExpensePayload<ExtArgs>;
				fields: Prisma.ExpenseFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.ExpenseFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
					};
					findFirst: {
						args: Prisma.ExpenseFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
					};
					findMany: {
						args: Prisma.ExpenseFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[];
					};
					create: {
						args: Prisma.ExpenseCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
					};
					createMany: {
						args: Prisma.ExpenseCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[];
					};
					delete: {
						args: Prisma.ExpenseDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
					};
					update: {
						args: Prisma.ExpenseUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
					};
					deleteMany: {
						args: Prisma.ExpenseDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.ExpenseUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[];
					};
					upsert: {
						args: Prisma.ExpenseUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
					};
					aggregate: {
						args: Prisma.ExpenseAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateExpense>;
					};
					groupBy: {
						args: Prisma.ExpenseGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ExpenseGroupByOutputType>[];
					};
					count: {
						args: Prisma.ExpenseCountArgs<ExtArgs>;
						result: $Utils.Optional<ExpenseCountAggregateOutputType> | number;
					};
				};
			};
			SalesSummary: {
				payload: Prisma.$SalesSummaryPayload<ExtArgs>;
				fields: Prisma.SalesSummaryFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.SalesSummaryFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.SalesSummaryFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>;
					};
					findFirst: {
						args: Prisma.SalesSummaryFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.SalesSummaryFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>;
					};
					findMany: {
						args: Prisma.SalesSummaryFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>[];
					};
					create: {
						args: Prisma.SalesSummaryCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>;
					};
					createMany: {
						args: Prisma.SalesSummaryCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.SalesSummaryCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>[];
					};
					delete: {
						args: Prisma.SalesSummaryDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>;
					};
					update: {
						args: Prisma.SalesSummaryUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>;
					};
					deleteMany: {
						args: Prisma.SalesSummaryDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.SalesSummaryUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.SalesSummaryUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>[];
					};
					upsert: {
						args: Prisma.SalesSummaryUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>;
					};
					aggregate: {
						args: Prisma.SalesSummaryAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateSalesSummary>;
					};
					groupBy: {
						args: Prisma.SalesSummaryGroupByArgs<ExtArgs>;
						result: $Utils.Optional<SalesSummaryGroupByOutputType>[];
					};
					count: {
						args: Prisma.SalesSummaryCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<SalesSummaryCountAggregateOutputType>
							| number;
					};
				};
			};
			PurchaseSummary: {
				payload: Prisma.$PurchaseSummaryPayload<ExtArgs>;
				fields: Prisma.PurchaseSummaryFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.PurchaseSummaryFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.PurchaseSummaryFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>;
					};
					findFirst: {
						args: Prisma.PurchaseSummaryFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.PurchaseSummaryFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>;
					};
					findMany: {
						args: Prisma.PurchaseSummaryFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>[];
					};
					create: {
						args: Prisma.PurchaseSummaryCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>;
					};
					createMany: {
						args: Prisma.PurchaseSummaryCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.PurchaseSummaryCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>[];
					};
					delete: {
						args: Prisma.PurchaseSummaryDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>;
					};
					update: {
						args: Prisma.PurchaseSummaryUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>;
					};
					deleteMany: {
						args: Prisma.PurchaseSummaryDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.PurchaseSummaryUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.PurchaseSummaryUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>[];
					};
					upsert: {
						args: Prisma.PurchaseSummaryUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>;
					};
					aggregate: {
						args: Prisma.PurchaseSummaryAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregatePurchaseSummary>;
					};
					groupBy: {
						args: Prisma.PurchaseSummaryGroupByArgs<ExtArgs>;
						result: $Utils.Optional<PurchaseSummaryGroupByOutputType>[];
					};
					count: {
						args: Prisma.PurchaseSummaryCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<PurchaseSummaryCountAggregateOutputType>
							| number;
					};
				};
			};
			ExpenseSummary: {
				payload: Prisma.$ExpenseSummaryPayload<ExtArgs>;
				fields: Prisma.ExpenseSummaryFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.ExpenseSummaryFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.ExpenseSummaryFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>;
					};
					findFirst: {
						args: Prisma.ExpenseSummaryFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.ExpenseSummaryFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>;
					};
					findMany: {
						args: Prisma.ExpenseSummaryFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>[];
					};
					create: {
						args: Prisma.ExpenseSummaryCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>;
					};
					createMany: {
						args: Prisma.ExpenseSummaryCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.ExpenseSummaryCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>[];
					};
					delete: {
						args: Prisma.ExpenseSummaryDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>;
					};
					update: {
						args: Prisma.ExpenseSummaryUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>;
					};
					deleteMany: {
						args: Prisma.ExpenseSummaryDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.ExpenseSummaryUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.ExpenseSummaryUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>[];
					};
					upsert: {
						args: Prisma.ExpenseSummaryUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>;
					};
					aggregate: {
						args: Prisma.ExpenseSummaryAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateExpenseSummary>;
					};
					groupBy: {
						args: Prisma.ExpenseSummaryGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ExpenseSummaryGroupByOutputType>[];
					};
					count: {
						args: Prisma.ExpenseSummaryCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<ExpenseSummaryCountAggregateOutputType>
							| number;
					};
				};
			};
			ExpenseByCategory: {
				payload: Prisma.$ExpenseByCategoryPayload<ExtArgs>;
				fields: Prisma.ExpenseByCategoryFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.ExpenseByCategoryFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.ExpenseByCategoryFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>;
					};
					findFirst: {
						args: Prisma.ExpenseByCategoryFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.ExpenseByCategoryFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>;
					};
					findMany: {
						args: Prisma.ExpenseByCategoryFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>[];
					};
					create: {
						args: Prisma.ExpenseByCategoryCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>;
					};
					createMany: {
						args: Prisma.ExpenseByCategoryCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.ExpenseByCategoryCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>[];
					};
					delete: {
						args: Prisma.ExpenseByCategoryDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>;
					};
					update: {
						args: Prisma.ExpenseByCategoryUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>;
					};
					deleteMany: {
						args: Prisma.ExpenseByCategoryDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.ExpenseByCategoryUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.ExpenseByCategoryUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>[];
					};
					upsert: {
						args: Prisma.ExpenseByCategoryUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>;
					};
					aggregate: {
						args: Prisma.ExpenseByCategoryAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateExpenseByCategory>;
					};
					groupBy: {
						args: Prisma.ExpenseByCategoryGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ExpenseByCategoryGroupByOutputType>[];
					};
					count: {
						args: Prisma.ExpenseByCategoryCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<ExpenseByCategoryCountAggregateOutputType>
							| number;
					};
				};
			};
		};
	} & {
		other: {
			payload: any;
			operations: {
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
			};
		};
	};
	export const defineExtension: $Extensions.ExtendsHook<
		"define",
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>;
	export type DefaultPrismaClient = PrismaClient;
	export type ErrorFormat = "pretty" | "colorless" | "minimal";
	export interface PrismaClientOptions {
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasources?: Datasources;
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasourceUrl?: string;
		/**
		 * @default "colorless"
		 */
		errorFormat?: ErrorFormat;
		/**
		 * @example
		 * ```
		 * // Defaults to stdout
		 * log: ['query', 'info', 'warn', 'error']
		 *
		 * // Emit as events
		 * log: [
		 *   { emit: 'stdout', level: 'query' },
		 *   { emit: 'stdout', level: 'info' },
		 *   { emit: 'stdout', level: 'warn' }
		 *   { emit: 'stdout', level: 'error' }
		 * ]
		 * ```
		 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
		 */
		log?: (LogLevel | LogDefinition)[];
		/**
		 * The default values for transactionOptions
		 * maxWait ?= 2000
		 * timeout ?= 5000
		 */
		transactionOptions?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		};
		/**
		 * Global configuration for omitting model fields by default.
		 *
		 * @example
		 * ```
		 * const prisma = new PrismaClient({
		 *   omit: {
		 *     user: {
		 *       password: true
		 *     }
		 *   }
		 * })
		 * ```
		 */
		omit?: Prisma.GlobalOmitConfig;
	}
	export type GlobalOmitConfig = {
		user?: UserOmit;
		product?: ProductOmit;
		sale?: SaleOmit;
		purchase?: PurchaseOmit;
		expense?: ExpenseOmit;
		salesSummary?: SalesSummaryOmit;
		purchaseSummary?: PurchaseSummaryOmit;
		expenseSummary?: ExpenseSummaryOmit;
		expenseByCategory?: ExpenseByCategoryOmit;
	};

	/* Types for Logging */
	export type LogLevel = "info" | "query" | "warn" | "error";
	export type LogDefinition = {
		level: LogLevel;
		emit: "stdout" | "event";
	};

	export type GetLogType<T extends LogLevel | LogDefinition> =
		T extends LogDefinition
			? T["emit"] extends "event"
				? T["level"]
				: never
			: never;
	export type GetEvents<T extends any> =
		T extends Array<LogLevel | LogDefinition>
			?
					| GetLogType<T[0]>
					| GetLogType<T[1]>
					| GetLogType<T[2]>
					| GetLogType<T[3]>
			: never;

	export type QueryEvent = {
		timestamp: Date;
		query: string;
		params: string;
		duration: number;
		target: string;
	};

	export type LogEvent = {
		timestamp: Date;
		message: string;
		target: string;
	};
	/* End Types for Logging */

	export type PrismaAction =
		| "findUnique"
		| "findUniqueOrThrow"
		| "findMany"
		| "findFirst"
		| "findFirstOrThrow"
		| "create"
		| "createMany"
		| "createManyAndReturn"
		| "update"
		| "updateMany"
		| "updateManyAndReturn"
		| "upsert"
		| "delete"
		| "deleteMany"
		| "executeRaw"
		| "queryRaw"
		| "aggregate"
		| "count"
		| "runCommandRaw"
		| "findRaw"
		| "groupBy";

	/**
	 * These options are being passed into the middleware as "params"
	 */
	export type MiddlewareParams = {
		model?: ModelName;
		action: PrismaAction;
		args: any;
		dataPath: string[];
		runInTransaction: boolean;
	};

	/**
	 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
	 */
	export type Middleware<T = any> = (
		params: MiddlewareParams,
		next: (params: MiddlewareParams) => $Utils.JsPromise<T>
	) => $Utils.JsPromise<T>;

	// tested in getLogLevel.test.ts
	export function getLogLevel(
		log: Array<LogLevel | LogDefinition>
	): LogLevel | undefined;

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<
		Prisma.DefaultPrismaClient,
		runtime.ITXClientDenyList
	>;

	export type Datasource = {
		url?: string;
	};

	/**
	 * Count Types
	 */

	/**
	 * Count Type ProductCountOutputType
	 */

	export type ProductCountOutputType = {
		Sales: number;
		Purchases: number;
	};

	export type ProductCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		Sales?: boolean | ProductCountOutputTypeCountSalesArgs;
		Purchases?: boolean | ProductCountOutputTypeCountPurchasesArgs;
	};

	// Custom InputTypes
	/**
	 * ProductCountOutputType without action
	 */
	export type ProductCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ProductCountOutputType
		 */
		select?: ProductCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * ProductCountOutputType without action
	 */
	export type ProductCountOutputTypeCountSalesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: SaleWhereInput;
	};

	/**
	 * ProductCountOutputType without action
	 */
	export type ProductCountOutputTypeCountPurchasesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: PurchaseWhereInput;
	};

	/**
	 * Count Type ExpenseSummaryCountOutputType
	 */

	export type ExpenseSummaryCountOutputType = {
		ExpenseByCategory: number;
	};

	export type ExpenseSummaryCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		ExpenseByCategory?:
			| boolean
			| ExpenseSummaryCountOutputTypeCountExpenseByCategoryArgs;
	};

	// Custom InputTypes
	/**
	 * ExpenseSummaryCountOutputType without action
	 */
	export type ExpenseSummaryCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummaryCountOutputType
		 */
		select?: ExpenseSummaryCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * ExpenseSummaryCountOutputType without action
	 */
	export type ExpenseSummaryCountOutputTypeCountExpenseByCategoryArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ExpenseByCategoryWhereInput;
	};

	/**
	 * Models
	 */

	/**
	 * Model User
	 */

	export type AggregateUser = {
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	export type UserMinAggregateOutputType = {
		id: string | null;
		name: string | null;
		email: string | null;
	};

	export type UserMaxAggregateOutputType = {
		id: string | null;
		name: string | null;
		email: string | null;
	};

	export type UserCountAggregateOutputType = {
		id: number;
		name: number;
		email: number;
		_all: number;
	};

	export type UserMinAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
	};

	export type UserMaxAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
	};

	export type UserCountAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		_all?: true;
	};

	export type UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 **/
		_count?: true | UserCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserMaxAggregateInputType;
	};

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUser[P]>
			: GetScalarType<T[P], AggregateUser[P]>;
	};

	export type UserGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserWhereInput;
		orderBy?:
			| UserOrderByWithAggregationInput
			| UserOrderByWithAggregationInput[];
		by: UserScalarFieldEnum[] | UserScalarFieldEnum;
		having?: UserScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: UserCountAggregateInputType | true;
		_min?: UserMinAggregateInputType;
		_max?: UserMaxAggregateInputType;
	};

	export type UserGroupByOutputType = {
		id: string;
		name: string;
		email: string;
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>;
			}
		>
	>;

	export type UserSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectScalar = {
		id?: boolean;
		name?: boolean;
		email?: boolean;
	};

	export type UserOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>;

	export type $UserPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "User";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				name: string;
				email: string;
			},
			ExtArgs["result"]["user"]
		>;
		composites: {};
	};

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
		$Result.GetResult<Prisma.$UserPayload, S>;

	type UserCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: UserCountAggregateInputType | true;
	};

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["User"];
			meta: { name: "User" };
		};
		/**
		 * Find zero or one User that matches the filter.
		 * @param {UserFindUniqueArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one User that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first User that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first User that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Users that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Users
		 * const users = await prisma.user.findMany()
		 *
		 * // Get first 10 Users
		 * const users = await prisma.user.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends UserFindManyArgs>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a User.
		 * @param {UserCreateArgs} args - Arguments to create a User.
		 * @example
		 * // Create one User
		 * const User = await prisma.user.create({
		 *   data: {
		 *     // ... data to create a User
		 *   }
		 * })
		 *
		 */
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Users.
		 * @param {UserCreateManyArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserCreateManyArgs>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Users and returns the data saved in the database.
		 * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a User.
		 * @param {UserDeleteArgs} args - Arguments to delete one User.
		 * @example
		 * // Delete one User
		 * const User = await prisma.user.delete({
		 *   where: {
		 *     // ... filter to delete one User
		 *   }
		 * })
		 *
		 */
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one User.
		 * @param {UserUpdateArgs} args - Arguments to update one User.
		 * @example
		 * // Update one User
		 * const user = await prisma.user.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Users.
		 * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
		 * @example
		 * // Delete a few Users
		 * const { count } = await prisma.user.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends UserDeleteManyArgs>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends UserUpdateManyArgs>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users and returns the data updated in the database.
		 * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
			args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one User.
		 * @param {UserUpsertArgs} args - Arguments to update or create a User.
		 * @example
		 * // Update or create a User
		 * const user = await prisma.user.upsert({
		 *   create: {
		 *     // ... data to create a User
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the User we want to update
		 *   }
		 * })
		 */
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserCountArgs} args - Arguments to filter Users to count.
		 * @example
		 * // Count the number of Users
		 * const count = await prisma.user.count({
		 *   where: {
		 *     // ... the filter for the Users we want to count
		 *   }
		 * })
		 **/
		count<T extends UserCountArgs>(
			args?: Subset<T, UserCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], UserCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>
		): Prisma.PrismaPromise<GetUserAggregateType<T>>;

		/**
		 * Group by User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends UserGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserGroupByArgs["orderBy"] }
				: { orderBy?: UserGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors
			? GetUserGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<"User", "String">;
		readonly name: FieldRef<"User", "String">;
		readonly email: FieldRef<"User", "String">;
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findFirstOrThrow
	 */
	export type UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findMany
	 */
	export type UserFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which Users to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User create
	 */
	export type UserCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>;
	};

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User createManyAndReturn
	 */
	export type UserCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User update
	 */
	export type UserUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User updateMany
	 */
	export type UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User updateManyAndReturn
	 */
	export type UserUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User upsert
	 */
	export type UserUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput;
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>;
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
	};

	/**
	 * User delete
	 */
	export type UserDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to delete.
		 */
		limit?: number;
	};

	/**
	 * User without action
	 */
	export type UserDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
	};

	/**
	 * Model Product
	 */

	export type AggregateProduct = {
		_count: ProductCountAggregateOutputType | null;
		_avg: ProductAvgAggregateOutputType | null;
		_sum: ProductSumAggregateOutputType | null;
		_min: ProductMinAggregateOutputType | null;
		_max: ProductMaxAggregateOutputType | null;
	};

	export type ProductAvgAggregateOutputType = {
		price: number | null;
		rating: number | null;
		stockQuantity: number | null;
	};

	export type ProductSumAggregateOutputType = {
		price: number | null;
		rating: number | null;
		stockQuantity: number | null;
	};

	export type ProductMinAggregateOutputType = {
		id: string | null;
		name: string | null;
		price: number | null;
		rating: number | null;
		stockQuantity: number | null;
	};

	export type ProductMaxAggregateOutputType = {
		id: string | null;
		name: string | null;
		price: number | null;
		rating: number | null;
		stockQuantity: number | null;
	};

	export type ProductCountAggregateOutputType = {
		id: number;
		name: number;
		price: number;
		rating: number;
		stockQuantity: number;
		_all: number;
	};

	export type ProductAvgAggregateInputType = {
		price?: true;
		rating?: true;
		stockQuantity?: true;
	};

	export type ProductSumAggregateInputType = {
		price?: true;
		rating?: true;
		stockQuantity?: true;
	};

	export type ProductMinAggregateInputType = {
		id?: true;
		name?: true;
		price?: true;
		rating?: true;
		stockQuantity?: true;
	};

	export type ProductMaxAggregateInputType = {
		id?: true;
		name?: true;
		price?: true;
		rating?: true;
		stockQuantity?: true;
	};

	export type ProductCountAggregateInputType = {
		id?: true;
		name?: true;
		price?: true;
		rating?: true;
		stockQuantity?: true;
		_all?: true;
	};

	export type ProductAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Product to aggregate.
		 */
		where?: ProductWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Products to fetch.
		 */
		orderBy?:
			| ProductOrderByWithRelationInput
			| ProductOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ProductWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Products from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Products.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Products
		 **/
		_count?: true | ProductCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ProductAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ProductSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ProductMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ProductMaxAggregateInputType;
	};

	export type GetProductAggregateType<T extends ProductAggregateArgs> = {
		[P in keyof T & keyof AggregateProduct]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateProduct[P]>
			: GetScalarType<T[P], AggregateProduct[P]>;
	};

	export type ProductGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ProductWhereInput;
		orderBy?:
			| ProductOrderByWithAggregationInput
			| ProductOrderByWithAggregationInput[];
		by: ProductScalarFieldEnum[] | ProductScalarFieldEnum;
		having?: ProductScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ProductCountAggregateInputType | true;
		_avg?: ProductAvgAggregateInputType;
		_sum?: ProductSumAggregateInputType;
		_min?: ProductMinAggregateInputType;
		_max?: ProductMaxAggregateInputType;
	};

	export type ProductGroupByOutputType = {
		id: string;
		name: string;
		price: number;
		rating: number | null;
		stockQuantity: number;
		_count: ProductCountAggregateOutputType | null;
		_avg: ProductAvgAggregateOutputType | null;
		_sum: ProductSumAggregateOutputType | null;
		_min: ProductMinAggregateOutputType | null;
		_max: ProductMaxAggregateOutputType | null;
	};

	type GetProductGroupByPayload<T extends ProductGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<ProductGroupByOutputType, T["by"]> & {
					[P in keyof T & keyof ProductGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], ProductGroupByOutputType[P]>
						: GetScalarType<T[P], ProductGroupByOutputType[P]>;
				}
			>
		>;

	export type ProductSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			price?: boolean;
			rating?: boolean;
			stockQuantity?: boolean;
			Sales?: boolean | Product$SalesArgs<ExtArgs>;
			Purchases?: boolean | Product$PurchasesArgs<ExtArgs>;
			_count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["product"]
	>;

	export type ProductSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			price?: boolean;
			rating?: boolean;
			stockQuantity?: boolean;
		},
		ExtArgs["result"]["product"]
	>;

	export type ProductSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			price?: boolean;
			rating?: boolean;
			stockQuantity?: boolean;
		},
		ExtArgs["result"]["product"]
	>;

	export type ProductSelectScalar = {
		id?: boolean;
		name?: boolean;
		price?: boolean;
		rating?: boolean;
		stockQuantity?: boolean;
	};

	export type ProductOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "name" | "price" | "rating" | "stockQuantity",
		ExtArgs["result"]["product"]
	>;
	export type ProductInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		Sales?: boolean | Product$SalesArgs<ExtArgs>;
		Purchases?: boolean | Product$PurchasesArgs<ExtArgs>;
		_count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type ProductIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};
	export type ProductIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};

	export type $ProductPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Product";
		objects: {
			Sales: Prisma.$SalePayload<ExtArgs>[];
			Purchases: Prisma.$PurchasePayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				name: string;
				price: number;
				rating: number | null;
				stockQuantity: number;
			},
			ExtArgs["result"]["product"]
		>;
		composites: {};
	};

	type ProductGetPayload<
		S extends boolean | null | undefined | ProductDefaultArgs,
	> = $Result.GetResult<Prisma.$ProductPayload, S>;

	type ProductCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<ProductFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: ProductCountAggregateInputType | true;
	};

	export interface ProductDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Product"];
			meta: { name: "Product" };
		};
		/**
		 * Find zero or one Product that matches the filter.
		 * @param {ProductFindUniqueArgs} args - Arguments to find a Product
		 * @example
		 * // Get one Product
		 * const product = await prisma.product.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ProductFindUniqueArgs>(
			args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
		): Prisma__ProductClient<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Product that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
		 * @example
		 * // Get one Product
		 * const product = await prisma.product.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__ProductClient<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Product that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ProductFindFirstArgs} args - Arguments to find a Product
		 * @example
		 * // Get one Product
		 * const product = await prisma.product.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ProductFindFirstArgs>(
			args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
		): Prisma__ProductClient<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Product that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
		 * @example
		 * // Get one Product
		 * const product = await prisma.product.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__ProductClient<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Products that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Products
		 * const products = await prisma.product.findMany()
		 *
		 * // Get first 10 Products
		 * const products = await prisma.product.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ProductFindManyArgs>(
			args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Product.
		 * @param {ProductCreateArgs} args - Arguments to create a Product.
		 * @example
		 * // Create one Product
		 * const Product = await prisma.product.create({
		 *   data: {
		 *     // ... data to create a Product
		 *   }
		 * })
		 *
		 */
		create<T extends ProductCreateArgs>(
			args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
		): Prisma__ProductClient<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Products.
		 * @param {ProductCreateManyArgs} args - Arguments to create many Products.
		 * @example
		 * // Create many Products
		 * const product = await prisma.product.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ProductCreateManyArgs>(
			args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Products and returns the data saved in the database.
		 * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
		 * @example
		 * // Create many Products
		 * const product = await prisma.product.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Products and only return the `id`
		 * const productWithIdOnly = await prisma.product.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Product.
		 * @param {ProductDeleteArgs} args - Arguments to delete one Product.
		 * @example
		 * // Delete one Product
		 * const Product = await prisma.product.delete({
		 *   where: {
		 *     // ... filter to delete one Product
		 *   }
		 * })
		 *
		 */
		delete<T extends ProductDeleteArgs>(
			args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
		): Prisma__ProductClient<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Product.
		 * @param {ProductUpdateArgs} args - Arguments to update one Product.
		 * @example
		 * // Update one Product
		 * const product = await prisma.product.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ProductUpdateArgs>(
			args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
		): Prisma__ProductClient<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Products.
		 * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
		 * @example
		 * // Delete a few Products
		 * const { count } = await prisma.product.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ProductDeleteManyArgs>(
			args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Products.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Products
		 * const product = await prisma.product.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ProductUpdateManyArgs>(
			args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Products and returns the data updated in the database.
		 * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
		 * @example
		 * // Update many Products
		 * const product = await prisma.product.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Products and only return the `id`
		 * const productWithIdOnly = await prisma.product.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(
			args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Product.
		 * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
		 * @example
		 * // Update or create a Product
		 * const product = await prisma.product.upsert({
		 *   create: {
		 *     // ... data to create a Product
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Product we want to update
		 *   }
		 * })
		 */
		upsert<T extends ProductUpsertArgs>(
			args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
		): Prisma__ProductClient<
			$Result.GetResult<
				Prisma.$ProductPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Products.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ProductCountArgs} args - Arguments to filter Products to count.
		 * @example
		 * // Count the number of Products
		 * const count = await prisma.product.count({
		 *   where: {
		 *     // ... the filter for the Products we want to count
		 *   }
		 * })
		 **/
		count<T extends ProductCountArgs>(
			args?: Subset<T, ProductCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], ProductCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Product.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends ProductAggregateArgs>(
			args: Subset<T, ProductAggregateArgs>
		): Prisma.PrismaPromise<GetProductAggregateType<T>>;

		/**
		 * Group by Product.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ProductGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends ProductGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ProductGroupByArgs["orderBy"] }
				: { orderBy?: ProductGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors
			? GetProductGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Product model
		 */
		readonly fields: ProductFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Product.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ProductClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		Sales<T extends Product$SalesArgs<ExtArgs> = {}>(
			args?: Subset<T, Product$SalesArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$SalePayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>;
		Purchases<T extends Product$PurchasesArgs<ExtArgs> = {}>(
			args?: Subset<T, Product$PurchasesArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$PurchasePayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Product model
	 */
	interface ProductFieldRefs {
		readonly id: FieldRef<"Product", "String">;
		readonly name: FieldRef<"Product", "String">;
		readonly price: FieldRef<"Product", "Float">;
		readonly rating: FieldRef<"Product", "Float">;
		readonly stockQuantity: FieldRef<"Product", "Int">;
	}

	// Custom InputTypes
	/**
	 * Product findUnique
	 */
	export type ProductFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
		/**
		 * Filter, which Product to fetch.
		 */
		where: ProductWhereUniqueInput;
	};

	/**
	 * Product findUniqueOrThrow
	 */
	export type ProductFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
		/**
		 * Filter, which Product to fetch.
		 */
		where: ProductWhereUniqueInput;
	};

	/**
	 * Product findFirst
	 */
	export type ProductFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
		/**
		 * Filter, which Product to fetch.
		 */
		where?: ProductWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Products to fetch.
		 */
		orderBy?:
			| ProductOrderByWithRelationInput
			| ProductOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Products.
		 */
		cursor?: ProductWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Products from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Products.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Products.
		 */
		distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
	};

	/**
	 * Product findFirstOrThrow
	 */
	export type ProductFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
		/**
		 * Filter, which Product to fetch.
		 */
		where?: ProductWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Products to fetch.
		 */
		orderBy?:
			| ProductOrderByWithRelationInput
			| ProductOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Products.
		 */
		cursor?: ProductWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Products from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Products.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Products.
		 */
		distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
	};

	/**
	 * Product findMany
	 */
	export type ProductFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
		/**
		 * Filter, which Products to fetch.
		 */
		where?: ProductWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Products to fetch.
		 */
		orderBy?:
			| ProductOrderByWithRelationInput
			| ProductOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Products.
		 */
		cursor?: ProductWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Products from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Products.
		 */
		skip?: number;
		distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
	};

	/**
	 * Product create
	 */
	export type ProductCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Product.
		 */
		data: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
	};

	/**
	 * Product createMany
	 */
	export type ProductCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Products.
		 */
		data: ProductCreateManyInput | ProductCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Product createManyAndReturn
	 */
	export type ProductCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * The data used to create many Products.
		 */
		data: ProductCreateManyInput | ProductCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Product update
	 */
	export type ProductUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Product.
		 */
		data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
		/**
		 * Choose, which Product to update.
		 */
		where: ProductWhereUniqueInput;
	};

	/**
	 * Product updateMany
	 */
	export type ProductUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Products.
		 */
		data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
		/**
		 * Filter which Products to update
		 */
		where?: ProductWhereInput;
		/**
		 * Limit how many Products to update.
		 */
		limit?: number;
	};

	/**
	 * Product updateManyAndReturn
	 */
	export type ProductUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * The data used to update Products.
		 */
		data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
		/**
		 * Filter which Products to update
		 */
		where?: ProductWhereInput;
		/**
		 * Limit how many Products to update.
		 */
		limit?: number;
	};

	/**
	 * Product upsert
	 */
	export type ProductUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Product to update in case it exists.
		 */
		where: ProductWhereUniqueInput;
		/**
		 * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
		 */
		create: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
		/**
		 * In case the Product was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
	};

	/**
	 * Product delete
	 */
	export type ProductDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
		/**
		 * Filter which Product to delete.
		 */
		where: ProductWhereUniqueInput;
	};

	/**
	 * Product deleteMany
	 */
	export type ProductDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Products to delete
		 */
		where?: ProductWhereInput;
		/**
		 * Limit how many Products to delete.
		 */
		limit?: number;
	};

	/**
	 * Product.Sales
	 */
	export type Product$SalesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		where?: SaleWhereInput;
		orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[];
		cursor?: SaleWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[];
	};

	/**
	 * Product.Purchases
	 */
	export type Product$PurchasesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		where?: PurchaseWhereInput;
		orderBy?:
			| PurchaseOrderByWithRelationInput
			| PurchaseOrderByWithRelationInput[];
		cursor?: PurchaseWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[];
	};

	/**
	 * Product without action
	 */
	export type ProductDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Product
		 */
		select?: ProductSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Product
		 */
		omit?: ProductOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ProductInclude<ExtArgs> | null;
	};

	/**
	 * Model Sale
	 */

	export type AggregateSale = {
		_count: SaleCountAggregateOutputType | null;
		_avg: SaleAvgAggregateOutputType | null;
		_sum: SaleSumAggregateOutputType | null;
		_min: SaleMinAggregateOutputType | null;
		_max: SaleMaxAggregateOutputType | null;
	};

	export type SaleAvgAggregateOutputType = {
		quantity: number | null;
		unitPrice: number | null;
		totalAmount: number | null;
	};

	export type SaleSumAggregateOutputType = {
		quantity: number | null;
		unitPrice: number | null;
		totalAmount: number | null;
	};

	export type SaleMinAggregateOutputType = {
		id: string | null;
		productId: string | null;
		timestamp: Date | null;
		quantity: number | null;
		unitPrice: number | null;
		totalAmount: number | null;
	};

	export type SaleMaxAggregateOutputType = {
		id: string | null;
		productId: string | null;
		timestamp: Date | null;
		quantity: number | null;
		unitPrice: number | null;
		totalAmount: number | null;
	};

	export type SaleCountAggregateOutputType = {
		id: number;
		productId: number;
		timestamp: number;
		quantity: number;
		unitPrice: number;
		totalAmount: number;
		_all: number;
	};

	export type SaleAvgAggregateInputType = {
		quantity?: true;
		unitPrice?: true;
		totalAmount?: true;
	};

	export type SaleSumAggregateInputType = {
		quantity?: true;
		unitPrice?: true;
		totalAmount?: true;
	};

	export type SaleMinAggregateInputType = {
		id?: true;
		productId?: true;
		timestamp?: true;
		quantity?: true;
		unitPrice?: true;
		totalAmount?: true;
	};

	export type SaleMaxAggregateInputType = {
		id?: true;
		productId?: true;
		timestamp?: true;
		quantity?: true;
		unitPrice?: true;
		totalAmount?: true;
	};

	export type SaleCountAggregateInputType = {
		id?: true;
		productId?: true;
		timestamp?: true;
		quantity?: true;
		unitPrice?: true;
		totalAmount?: true;
		_all?: true;
	};

	export type SaleAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Sale to aggregate.
		 */
		where?: SaleWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Sales to fetch.
		 */
		orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: SaleWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Sales from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Sales.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Sales
		 **/
		_count?: true | SaleCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: SaleAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: SaleSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: SaleMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: SaleMaxAggregateInputType;
	};

	export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
		[P in keyof T & keyof AggregateSale]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateSale[P]>
			: GetScalarType<T[P], AggregateSale[P]>;
	};

	export type SaleGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: SaleWhereInput;
		orderBy?:
			| SaleOrderByWithAggregationInput
			| SaleOrderByWithAggregationInput[];
		by: SaleScalarFieldEnum[] | SaleScalarFieldEnum;
		having?: SaleScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: SaleCountAggregateInputType | true;
		_avg?: SaleAvgAggregateInputType;
		_sum?: SaleSumAggregateInputType;
		_min?: SaleMinAggregateInputType;
		_max?: SaleMaxAggregateInputType;
	};

	export type SaleGroupByOutputType = {
		id: string;
		productId: string;
		timestamp: Date;
		quantity: number;
		unitPrice: number;
		totalAmount: number;
		_count: SaleCountAggregateOutputType | null;
		_avg: SaleAvgAggregateOutputType | null;
		_sum: SaleSumAggregateOutputType | null;
		_min: SaleMinAggregateOutputType | null;
		_max: SaleMaxAggregateOutputType | null;
	};

	type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<SaleGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof SaleGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], SaleGroupByOutputType[P]>
					: GetScalarType<T[P], SaleGroupByOutputType[P]>;
			}
		>
	>;

	export type SaleSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			productId?: boolean;
			timestamp?: boolean;
			quantity?: boolean;
			unitPrice?: boolean;
			totalAmount?: boolean;
			product?: boolean | ProductDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["sale"]
	>;

	export type SaleSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			productId?: boolean;
			timestamp?: boolean;
			quantity?: boolean;
			unitPrice?: boolean;
			totalAmount?: boolean;
			product?: boolean | ProductDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["sale"]
	>;

	export type SaleSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			productId?: boolean;
			timestamp?: boolean;
			quantity?: boolean;
			unitPrice?: boolean;
			totalAmount?: boolean;
			product?: boolean | ProductDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["sale"]
	>;

	export type SaleSelectScalar = {
		id?: boolean;
		productId?: boolean;
		timestamp?: boolean;
		quantity?: boolean;
		unitPrice?: boolean;
		totalAmount?: boolean;
	};

	export type SaleOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "productId" | "timestamp" | "quantity" | "unitPrice" | "totalAmount",
		ExtArgs["result"]["sale"]
	>;
	export type SaleInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		product?: boolean | ProductDefaultArgs<ExtArgs>;
	};
	export type SaleIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		product?: boolean | ProductDefaultArgs<ExtArgs>;
	};
	export type SaleIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		product?: boolean | ProductDefaultArgs<ExtArgs>;
	};

	export type $SalePayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Sale";
		objects: {
			product: Prisma.$ProductPayload<ExtArgs>;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				productId: string;
				timestamp: Date;
				quantity: number;
				unitPrice: number;
				totalAmount: number;
			},
			ExtArgs["result"]["sale"]
		>;
		composites: {};
	};

	type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> =
		$Result.GetResult<Prisma.$SalePayload, S>;

	type SaleCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<SaleFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: SaleCountAggregateInputType | true;
	};

	export interface SaleDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Sale"];
			meta: { name: "Sale" };
		};
		/**
		 * Find zero or one Sale that matches the filter.
		 * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
		 * @example
		 * // Get one Sale
		 * const sale = await prisma.sale.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends SaleFindUniqueArgs>(
			args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>
		): Prisma__SaleClient<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
		 * @example
		 * // Get one Sale
		 * const sale = await prisma.sale.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(
			args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__SaleClient<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Sale that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SaleFindFirstArgs} args - Arguments to find a Sale
		 * @example
		 * // Get one Sale
		 * const sale = await prisma.sale.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends SaleFindFirstArgs>(
			args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>
		): Prisma__SaleClient<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Sale that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
		 * @example
		 * // Get one Sale
		 * const sale = await prisma.sale.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(
			args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__SaleClient<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Sales that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Sales
		 * const sales = await prisma.sale.findMany()
		 *
		 * // Get first 10 Sales
		 * const sales = await prisma.sale.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends SaleFindManyArgs>(
			args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Sale.
		 * @param {SaleCreateArgs} args - Arguments to create a Sale.
		 * @example
		 * // Create one Sale
		 * const Sale = await prisma.sale.create({
		 *   data: {
		 *     // ... data to create a Sale
		 *   }
		 * })
		 *
		 */
		create<T extends SaleCreateArgs>(
			args: SelectSubset<T, SaleCreateArgs<ExtArgs>>
		): Prisma__SaleClient<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Sales.
		 * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
		 * @example
		 * // Create many Sales
		 * const sale = await prisma.sale.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends SaleCreateManyArgs>(
			args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Sales and returns the data saved in the database.
		 * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
		 * @example
		 * // Create many Sales
		 * const sale = await prisma.sale.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Sales and only return the `id`
		 * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(
			args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Sale.
		 * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
		 * @example
		 * // Delete one Sale
		 * const Sale = await prisma.sale.delete({
		 *   where: {
		 *     // ... filter to delete one Sale
		 *   }
		 * })
		 *
		 */
		delete<T extends SaleDeleteArgs>(
			args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>
		): Prisma__SaleClient<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Sale.
		 * @param {SaleUpdateArgs} args - Arguments to update one Sale.
		 * @example
		 * // Update one Sale
		 * const sale = await prisma.sale.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends SaleUpdateArgs>(
			args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>
		): Prisma__SaleClient<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Sales.
		 * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
		 * @example
		 * // Delete a few Sales
		 * const { count } = await prisma.sale.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends SaleDeleteManyArgs>(
			args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Sales.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Sales
		 * const sale = await prisma.sale.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends SaleUpdateManyArgs>(
			args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Sales and returns the data updated in the database.
		 * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
		 * @example
		 * // Update many Sales
		 * const sale = await prisma.sale.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Sales and only return the `id`
		 * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(
			args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Sale.
		 * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
		 * @example
		 * // Update or create a Sale
		 * const sale = await prisma.sale.upsert({
		 *   create: {
		 *     // ... data to create a Sale
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Sale we want to update
		 *   }
		 * })
		 */
		upsert<T extends SaleUpsertArgs>(
			args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>
		): Prisma__SaleClient<
			$Result.GetResult<
				Prisma.$SalePayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Sales.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SaleCountArgs} args - Arguments to filter Sales to count.
		 * @example
		 * // Count the number of Sales
		 * const count = await prisma.sale.count({
		 *   where: {
		 *     // ... the filter for the Sales we want to count
		 *   }
		 * })
		 **/
		count<T extends SaleCountArgs>(
			args?: Subset<T, SaleCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], SaleCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Sale.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends SaleAggregateArgs>(
			args: Subset<T, SaleAggregateArgs>
		): Prisma.PrismaPromise<GetSaleAggregateType<T>>;

		/**
		 * Group by Sale.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SaleGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends SaleGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: SaleGroupByArgs["orderBy"] }
				: { orderBy?: SaleGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors
			? GetSaleGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Sale model
		 */
		readonly fields: SaleFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Sale.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__SaleClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		product<T extends ProductDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, ProductDefaultArgs<ExtArgs>>
		): Prisma__ProductClient<
			| $Result.GetResult<
					Prisma.$ProductPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Sale model
	 */
	interface SaleFieldRefs {
		readonly id: FieldRef<"Sale", "String">;
		readonly productId: FieldRef<"Sale", "String">;
		readonly timestamp: FieldRef<"Sale", "DateTime">;
		readonly quantity: FieldRef<"Sale", "Int">;
		readonly unitPrice: FieldRef<"Sale", "Float">;
		readonly totalAmount: FieldRef<"Sale", "Float">;
	}

	// Custom InputTypes
	/**
	 * Sale findUnique
	 */
	export type SaleFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		/**
		 * Filter, which Sale to fetch.
		 */
		where: SaleWhereUniqueInput;
	};

	/**
	 * Sale findUniqueOrThrow
	 */
	export type SaleFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		/**
		 * Filter, which Sale to fetch.
		 */
		where: SaleWhereUniqueInput;
	};

	/**
	 * Sale findFirst
	 */
	export type SaleFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		/**
		 * Filter, which Sale to fetch.
		 */
		where?: SaleWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Sales to fetch.
		 */
		orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Sales.
		 */
		cursor?: SaleWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Sales from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Sales.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Sales.
		 */
		distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[];
	};

	/**
	 * Sale findFirstOrThrow
	 */
	export type SaleFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		/**
		 * Filter, which Sale to fetch.
		 */
		where?: SaleWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Sales to fetch.
		 */
		orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Sales.
		 */
		cursor?: SaleWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Sales from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Sales.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Sales.
		 */
		distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[];
	};

	/**
	 * Sale findMany
	 */
	export type SaleFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		/**
		 * Filter, which Sales to fetch.
		 */
		where?: SaleWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Sales to fetch.
		 */
		orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Sales.
		 */
		cursor?: SaleWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Sales from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Sales.
		 */
		skip?: number;
		distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[];
	};

	/**
	 * Sale create
	 */
	export type SaleCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Sale.
		 */
		data: XOR<SaleCreateInput, SaleUncheckedCreateInput>;
	};

	/**
	 * Sale createMany
	 */
	export type SaleCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Sales.
		 */
		data: SaleCreateManyInput | SaleCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Sale createManyAndReturn
	 */
	export type SaleCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * The data used to create many Sales.
		 */
		data: SaleCreateManyInput | SaleCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Sale update
	 */
	export type SaleUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Sale.
		 */
		data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>;
		/**
		 * Choose, which Sale to update.
		 */
		where: SaleWhereUniqueInput;
	};

	/**
	 * Sale updateMany
	 */
	export type SaleUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Sales.
		 */
		data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>;
		/**
		 * Filter which Sales to update
		 */
		where?: SaleWhereInput;
		/**
		 * Limit how many Sales to update.
		 */
		limit?: number;
	};

	/**
	 * Sale updateManyAndReturn
	 */
	export type SaleUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * The data used to update Sales.
		 */
		data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>;
		/**
		 * Filter which Sales to update
		 */
		where?: SaleWhereInput;
		/**
		 * Limit how many Sales to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Sale upsert
	 */
	export type SaleUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Sale to update in case it exists.
		 */
		where: SaleWhereUniqueInput;
		/**
		 * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
		 */
		create: XOR<SaleCreateInput, SaleUncheckedCreateInput>;
		/**
		 * In case the Sale was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>;
	};

	/**
	 * Sale delete
	 */
	export type SaleDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
		/**
		 * Filter which Sale to delete.
		 */
		where: SaleWhereUniqueInput;
	};

	/**
	 * Sale deleteMany
	 */
	export type SaleDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Sales to delete
		 */
		where?: SaleWhereInput;
		/**
		 * Limit how many Sales to delete.
		 */
		limit?: number;
	};

	/**
	 * Sale without action
	 */
	export type SaleDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Sale
		 */
		select?: SaleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Sale
		 */
		omit?: SaleOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SaleInclude<ExtArgs> | null;
	};

	/**
	 * Model Purchase
	 */

	export type AggregatePurchase = {
		_count: PurchaseCountAggregateOutputType | null;
		_avg: PurchaseAvgAggregateOutputType | null;
		_sum: PurchaseSumAggregateOutputType | null;
		_min: PurchaseMinAggregateOutputType | null;
		_max: PurchaseMaxAggregateOutputType | null;
	};

	export type PurchaseAvgAggregateOutputType = {
		quantity: number | null;
		unitCost: number | null;
		totalCost: number | null;
	};

	export type PurchaseSumAggregateOutputType = {
		quantity: number | null;
		unitCost: number | null;
		totalCost: number | null;
	};

	export type PurchaseMinAggregateOutputType = {
		id: string | null;
		productId: string | null;
		timestamp: Date | null;
		quantity: number | null;
		unitCost: number | null;
		totalCost: number | null;
	};

	export type PurchaseMaxAggregateOutputType = {
		id: string | null;
		productId: string | null;
		timestamp: Date | null;
		quantity: number | null;
		unitCost: number | null;
		totalCost: number | null;
	};

	export type PurchaseCountAggregateOutputType = {
		id: number;
		productId: number;
		timestamp: number;
		quantity: number;
		unitCost: number;
		totalCost: number;
		_all: number;
	};

	export type PurchaseAvgAggregateInputType = {
		quantity?: true;
		unitCost?: true;
		totalCost?: true;
	};

	export type PurchaseSumAggregateInputType = {
		quantity?: true;
		unitCost?: true;
		totalCost?: true;
	};

	export type PurchaseMinAggregateInputType = {
		id?: true;
		productId?: true;
		timestamp?: true;
		quantity?: true;
		unitCost?: true;
		totalCost?: true;
	};

	export type PurchaseMaxAggregateInputType = {
		id?: true;
		productId?: true;
		timestamp?: true;
		quantity?: true;
		unitCost?: true;
		totalCost?: true;
	};

	export type PurchaseCountAggregateInputType = {
		id?: true;
		productId?: true;
		timestamp?: true;
		quantity?: true;
		unitCost?: true;
		totalCost?: true;
		_all?: true;
	};

	export type PurchaseAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Purchase to aggregate.
		 */
		where?: PurchaseWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Purchases to fetch.
		 */
		orderBy?:
			| PurchaseOrderByWithRelationInput
			| PurchaseOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: PurchaseWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Purchases from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Purchases.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Purchases
		 **/
		_count?: true | PurchaseCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: PurchaseAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: PurchaseSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: PurchaseMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: PurchaseMaxAggregateInputType;
	};

	export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
		[P in keyof T & keyof AggregatePurchase]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregatePurchase[P]>
			: GetScalarType<T[P], AggregatePurchase[P]>;
	};

	export type PurchaseGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: PurchaseWhereInput;
		orderBy?:
			| PurchaseOrderByWithAggregationInput
			| PurchaseOrderByWithAggregationInput[];
		by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum;
		having?: PurchaseScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: PurchaseCountAggregateInputType | true;
		_avg?: PurchaseAvgAggregateInputType;
		_sum?: PurchaseSumAggregateInputType;
		_min?: PurchaseMinAggregateInputType;
		_max?: PurchaseMaxAggregateInputType;
	};

	export type PurchaseGroupByOutputType = {
		id: string;
		productId: string;
		timestamp: Date;
		quantity: number;
		unitCost: number;
		totalCost: number;
		_count: PurchaseCountAggregateOutputType | null;
		_avg: PurchaseAvgAggregateOutputType | null;
		_sum: PurchaseSumAggregateOutputType | null;
		_min: PurchaseMinAggregateOutputType | null;
		_max: PurchaseMaxAggregateOutputType | null;
	};

	type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<PurchaseGroupByOutputType, T["by"]> & {
					[P in keyof T & keyof PurchaseGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], PurchaseGroupByOutputType[P]>
						: GetScalarType<T[P], PurchaseGroupByOutputType[P]>;
				}
			>
		>;

	export type PurchaseSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			productId?: boolean;
			timestamp?: boolean;
			quantity?: boolean;
			unitCost?: boolean;
			totalCost?: boolean;
			product?: boolean | ProductDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["purchase"]
	>;

	export type PurchaseSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			productId?: boolean;
			timestamp?: boolean;
			quantity?: boolean;
			unitCost?: boolean;
			totalCost?: boolean;
			product?: boolean | ProductDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["purchase"]
	>;

	export type PurchaseSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			productId?: boolean;
			timestamp?: boolean;
			quantity?: boolean;
			unitCost?: boolean;
			totalCost?: boolean;
			product?: boolean | ProductDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["purchase"]
	>;

	export type PurchaseSelectScalar = {
		id?: boolean;
		productId?: boolean;
		timestamp?: boolean;
		quantity?: boolean;
		unitCost?: boolean;
		totalCost?: boolean;
	};

	export type PurchaseOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "productId" | "timestamp" | "quantity" | "unitCost" | "totalCost",
		ExtArgs["result"]["purchase"]
	>;
	export type PurchaseInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		product?: boolean | ProductDefaultArgs<ExtArgs>;
	};
	export type PurchaseIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		product?: boolean | ProductDefaultArgs<ExtArgs>;
	};
	export type PurchaseIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		product?: boolean | ProductDefaultArgs<ExtArgs>;
	};

	export type $PurchasePayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Purchase";
		objects: {
			product: Prisma.$ProductPayload<ExtArgs>;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				productId: string;
				timestamp: Date;
				quantity: number;
				unitCost: number;
				totalCost: number;
			},
			ExtArgs["result"]["purchase"]
		>;
		composites: {};
	};

	type PurchaseGetPayload<
		S extends boolean | null | undefined | PurchaseDefaultArgs,
	> = $Result.GetResult<Prisma.$PurchasePayload, S>;

	type PurchaseCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<PurchaseFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: PurchaseCountAggregateInputType | true;
	};

	export interface PurchaseDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Purchase"];
			meta: { name: "Purchase" };
		};
		/**
		 * Find zero or one Purchase that matches the filter.
		 * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
		 * @example
		 * // Get one Purchase
		 * const purchase = await prisma.purchase.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends PurchaseFindUniqueArgs>(
			args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>
		): Prisma__PurchaseClient<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
		 * @example
		 * // Get one Purchase
		 * const purchase = await prisma.purchase.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(
			args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__PurchaseClient<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Purchase that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
		 * @example
		 * // Get one Purchase
		 * const purchase = await prisma.purchase.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends PurchaseFindFirstArgs>(
			args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>
		): Prisma__PurchaseClient<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Purchase that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
		 * @example
		 * // Get one Purchase
		 * const purchase = await prisma.purchase.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(
			args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__PurchaseClient<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Purchases that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Purchases
		 * const purchases = await prisma.purchase.findMany()
		 *
		 * // Get first 10 Purchases
		 * const purchases = await prisma.purchase.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends PurchaseFindManyArgs>(
			args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Purchase.
		 * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
		 * @example
		 * // Create one Purchase
		 * const Purchase = await prisma.purchase.create({
		 *   data: {
		 *     // ... data to create a Purchase
		 *   }
		 * })
		 *
		 */
		create<T extends PurchaseCreateArgs>(
			args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>
		): Prisma__PurchaseClient<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Purchases.
		 * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
		 * @example
		 * // Create many Purchases
		 * const purchase = await prisma.purchase.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends PurchaseCreateManyArgs>(
			args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Purchases and returns the data saved in the database.
		 * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
		 * @example
		 * // Create many Purchases
		 * const purchase = await prisma.purchase.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Purchases and only return the `id`
		 * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(
			args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Purchase.
		 * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
		 * @example
		 * // Delete one Purchase
		 * const Purchase = await prisma.purchase.delete({
		 *   where: {
		 *     // ... filter to delete one Purchase
		 *   }
		 * })
		 *
		 */
		delete<T extends PurchaseDeleteArgs>(
			args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>
		): Prisma__PurchaseClient<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Purchase.
		 * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
		 * @example
		 * // Update one Purchase
		 * const purchase = await prisma.purchase.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends PurchaseUpdateArgs>(
			args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>
		): Prisma__PurchaseClient<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Purchases.
		 * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
		 * @example
		 * // Delete a few Purchases
		 * const { count } = await prisma.purchase.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends PurchaseDeleteManyArgs>(
			args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Purchases.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Purchases
		 * const purchase = await prisma.purchase.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends PurchaseUpdateManyArgs>(
			args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Purchases and returns the data updated in the database.
		 * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
		 * @example
		 * // Update many Purchases
		 * const purchase = await prisma.purchase.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Purchases and only return the `id`
		 * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(
			args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Purchase.
		 * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
		 * @example
		 * // Update or create a Purchase
		 * const purchase = await prisma.purchase.upsert({
		 *   create: {
		 *     // ... data to create a Purchase
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Purchase we want to update
		 *   }
		 * })
		 */
		upsert<T extends PurchaseUpsertArgs>(
			args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>
		): Prisma__PurchaseClient<
			$Result.GetResult<
				Prisma.$PurchasePayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Purchases.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
		 * @example
		 * // Count the number of Purchases
		 * const count = await prisma.purchase.count({
		 *   where: {
		 *     // ... the filter for the Purchases we want to count
		 *   }
		 * })
		 **/
		count<T extends PurchaseCountArgs>(
			args?: Subset<T, PurchaseCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], PurchaseCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Purchase.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends PurchaseAggregateArgs>(
			args: Subset<T, PurchaseAggregateArgs>
		): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>;

		/**
		 * Group by Purchase.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends PurchaseGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: PurchaseGroupByArgs["orderBy"] }
				: { orderBy?: PurchaseGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors
			? GetPurchaseGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Purchase model
		 */
		readonly fields: PurchaseFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Purchase.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__PurchaseClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		product<T extends ProductDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, ProductDefaultArgs<ExtArgs>>
		): Prisma__ProductClient<
			| $Result.GetResult<
					Prisma.$ProductPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Purchase model
	 */
	interface PurchaseFieldRefs {
		readonly id: FieldRef<"Purchase", "String">;
		readonly productId: FieldRef<"Purchase", "String">;
		readonly timestamp: FieldRef<"Purchase", "DateTime">;
		readonly quantity: FieldRef<"Purchase", "Int">;
		readonly unitCost: FieldRef<"Purchase", "Float">;
		readonly totalCost: FieldRef<"Purchase", "Float">;
	}

	// Custom InputTypes
	/**
	 * Purchase findUnique
	 */
	export type PurchaseFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		/**
		 * Filter, which Purchase to fetch.
		 */
		where: PurchaseWhereUniqueInput;
	};

	/**
	 * Purchase findUniqueOrThrow
	 */
	export type PurchaseFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		/**
		 * Filter, which Purchase to fetch.
		 */
		where: PurchaseWhereUniqueInput;
	};

	/**
	 * Purchase findFirst
	 */
	export type PurchaseFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		/**
		 * Filter, which Purchase to fetch.
		 */
		where?: PurchaseWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Purchases to fetch.
		 */
		orderBy?:
			| PurchaseOrderByWithRelationInput
			| PurchaseOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Purchases.
		 */
		cursor?: PurchaseWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Purchases from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Purchases.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Purchases.
		 */
		distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[];
	};

	/**
	 * Purchase findFirstOrThrow
	 */
	export type PurchaseFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		/**
		 * Filter, which Purchase to fetch.
		 */
		where?: PurchaseWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Purchases to fetch.
		 */
		orderBy?:
			| PurchaseOrderByWithRelationInput
			| PurchaseOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Purchases.
		 */
		cursor?: PurchaseWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Purchases from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Purchases.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Purchases.
		 */
		distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[];
	};

	/**
	 * Purchase findMany
	 */
	export type PurchaseFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		/**
		 * Filter, which Purchases to fetch.
		 */
		where?: PurchaseWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Purchases to fetch.
		 */
		orderBy?:
			| PurchaseOrderByWithRelationInput
			| PurchaseOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Purchases.
		 */
		cursor?: PurchaseWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Purchases from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Purchases.
		 */
		skip?: number;
		distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[];
	};

	/**
	 * Purchase create
	 */
	export type PurchaseCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Purchase.
		 */
		data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>;
	};

	/**
	 * Purchase createMany
	 */
	export type PurchaseCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Purchases.
		 */
		data: PurchaseCreateManyInput | PurchaseCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Purchase createManyAndReturn
	 */
	export type PurchaseCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * The data used to create many Purchases.
		 */
		data: PurchaseCreateManyInput | PurchaseCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Purchase update
	 */
	export type PurchaseUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Purchase.
		 */
		data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>;
		/**
		 * Choose, which Purchase to update.
		 */
		where: PurchaseWhereUniqueInput;
	};

	/**
	 * Purchase updateMany
	 */
	export type PurchaseUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Purchases.
		 */
		data: XOR<
			PurchaseUpdateManyMutationInput,
			PurchaseUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Purchases to update
		 */
		where?: PurchaseWhereInput;
		/**
		 * Limit how many Purchases to update.
		 */
		limit?: number;
	};

	/**
	 * Purchase updateManyAndReturn
	 */
	export type PurchaseUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * The data used to update Purchases.
		 */
		data: XOR<
			PurchaseUpdateManyMutationInput,
			PurchaseUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Purchases to update
		 */
		where?: PurchaseWhereInput;
		/**
		 * Limit how many Purchases to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Purchase upsert
	 */
	export type PurchaseUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Purchase to update in case it exists.
		 */
		where: PurchaseWhereUniqueInput;
		/**
		 * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
		 */
		create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>;
		/**
		 * In case the Purchase was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>;
	};

	/**
	 * Purchase delete
	 */
	export type PurchaseDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
		/**
		 * Filter which Purchase to delete.
		 */
		where: PurchaseWhereUniqueInput;
	};

	/**
	 * Purchase deleteMany
	 */
	export type PurchaseDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Purchases to delete
		 */
		where?: PurchaseWhereInput;
		/**
		 * Limit how many Purchases to delete.
		 */
		limit?: number;
	};

	/**
	 * Purchase without action
	 */
	export type PurchaseDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Purchase
		 */
		select?: PurchaseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Purchase
		 */
		omit?: PurchaseOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PurchaseInclude<ExtArgs> | null;
	};

	/**
	 * Model Expense
	 */

	export type AggregateExpense = {
		_count: ExpenseCountAggregateOutputType | null;
		_avg: ExpenseAvgAggregateOutputType | null;
		_sum: ExpenseSumAggregateOutputType | null;
		_min: ExpenseMinAggregateOutputType | null;
		_max: ExpenseMaxAggregateOutputType | null;
	};

	export type ExpenseAvgAggregateOutputType = {
		amount: number | null;
	};

	export type ExpenseSumAggregateOutputType = {
		amount: number | null;
	};

	export type ExpenseMinAggregateOutputType = {
		id: string | null;
		category: string | null;
		amount: number | null;
		timestamp: Date | null;
	};

	export type ExpenseMaxAggregateOutputType = {
		id: string | null;
		category: string | null;
		amount: number | null;
		timestamp: Date | null;
	};

	export type ExpenseCountAggregateOutputType = {
		id: number;
		category: number;
		amount: number;
		timestamp: number;
		_all: number;
	};

	export type ExpenseAvgAggregateInputType = {
		amount?: true;
	};

	export type ExpenseSumAggregateInputType = {
		amount?: true;
	};

	export type ExpenseMinAggregateInputType = {
		id?: true;
		category?: true;
		amount?: true;
		timestamp?: true;
	};

	export type ExpenseMaxAggregateInputType = {
		id?: true;
		category?: true;
		amount?: true;
		timestamp?: true;
	};

	export type ExpenseCountAggregateInputType = {
		id?: true;
		category?: true;
		amount?: true;
		timestamp?: true;
		_all?: true;
	};

	export type ExpenseAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Expense to aggregate.
		 */
		where?: ExpenseWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Expenses to fetch.
		 */
		orderBy?:
			| ExpenseOrderByWithRelationInput
			| ExpenseOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ExpenseWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Expenses from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Expenses.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Expenses
		 **/
		_count?: true | ExpenseCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ExpenseAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ExpenseSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ExpenseMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ExpenseMaxAggregateInputType;
	};

	export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
		[P in keyof T & keyof AggregateExpense]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateExpense[P]>
			: GetScalarType<T[P], AggregateExpense[P]>;
	};

	export type ExpenseGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ExpenseWhereInput;
		orderBy?:
			| ExpenseOrderByWithAggregationInput
			| ExpenseOrderByWithAggregationInput[];
		by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum;
		having?: ExpenseScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ExpenseCountAggregateInputType | true;
		_avg?: ExpenseAvgAggregateInputType;
		_sum?: ExpenseSumAggregateInputType;
		_min?: ExpenseMinAggregateInputType;
		_max?: ExpenseMaxAggregateInputType;
	};

	export type ExpenseGroupByOutputType = {
		id: string;
		category: string;
		amount: number;
		timestamp: Date;
		_count: ExpenseCountAggregateOutputType | null;
		_avg: ExpenseAvgAggregateOutputType | null;
		_sum: ExpenseSumAggregateOutputType | null;
		_min: ExpenseMinAggregateOutputType | null;
		_max: ExpenseMaxAggregateOutputType | null;
	};

	type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<ExpenseGroupByOutputType, T["by"]> & {
					[P in keyof T & keyof ExpenseGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], ExpenseGroupByOutputType[P]>
						: GetScalarType<T[P], ExpenseGroupByOutputType[P]>;
				}
			>
		>;

	export type ExpenseSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			category?: boolean;
			amount?: boolean;
			timestamp?: boolean;
		},
		ExtArgs["result"]["expense"]
	>;

	export type ExpenseSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			category?: boolean;
			amount?: boolean;
			timestamp?: boolean;
		},
		ExtArgs["result"]["expense"]
	>;

	export type ExpenseSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			category?: boolean;
			amount?: boolean;
			timestamp?: boolean;
		},
		ExtArgs["result"]["expense"]
	>;

	export type ExpenseSelectScalar = {
		id?: boolean;
		category?: boolean;
		amount?: boolean;
		timestamp?: boolean;
	};

	export type ExpenseOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "category" | "amount" | "timestamp",
		ExtArgs["result"]["expense"]
	>;

	export type $ExpensePayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Expense";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				category: string;
				amount: number;
				timestamp: Date;
			},
			ExtArgs["result"]["expense"]
		>;
		composites: {};
	};

	type ExpenseGetPayload<
		S extends boolean | null | undefined | ExpenseDefaultArgs,
	> = $Result.GetResult<Prisma.$ExpensePayload, S>;

	type ExpenseCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<ExpenseFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: ExpenseCountAggregateInputType | true;
	};

	export interface ExpenseDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Expense"];
			meta: { name: "Expense" };
		};
		/**
		 * Find zero or one Expense that matches the filter.
		 * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
		 * @example
		 * // Get one Expense
		 * const expense = await prisma.expense.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ExpenseFindUniqueArgs>(
			args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>
		): Prisma__ExpenseClient<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
		 * @example
		 * // Get one Expense
		 * const expense = await prisma.expense.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__ExpenseClient<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Expense that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
		 * @example
		 * // Get one Expense
		 * const expense = await prisma.expense.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ExpenseFindFirstArgs>(
			args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>
		): Prisma__ExpenseClient<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Expense that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
		 * @example
		 * // Get one Expense
		 * const expense = await prisma.expense.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__ExpenseClient<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Expenses that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Expenses
		 * const expenses = await prisma.expense.findMany()
		 *
		 * // Get first 10 Expenses
		 * const expenses = await prisma.expense.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ExpenseFindManyArgs>(
			args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Expense.
		 * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
		 * @example
		 * // Create one Expense
		 * const Expense = await prisma.expense.create({
		 *   data: {
		 *     // ... data to create a Expense
		 *   }
		 * })
		 *
		 */
		create<T extends ExpenseCreateArgs>(
			args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>
		): Prisma__ExpenseClient<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Expenses.
		 * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
		 * @example
		 * // Create many Expenses
		 * const expense = await prisma.expense.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ExpenseCreateManyArgs>(
			args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Expenses and returns the data saved in the database.
		 * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
		 * @example
		 * // Create many Expenses
		 * const expense = await prisma.expense.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Expenses and only return the `id`
		 * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Expense.
		 * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
		 * @example
		 * // Delete one Expense
		 * const Expense = await prisma.expense.delete({
		 *   where: {
		 *     // ... filter to delete one Expense
		 *   }
		 * })
		 *
		 */
		delete<T extends ExpenseDeleteArgs>(
			args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>
		): Prisma__ExpenseClient<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Expense.
		 * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
		 * @example
		 * // Update one Expense
		 * const expense = await prisma.expense.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ExpenseUpdateArgs>(
			args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>
		): Prisma__ExpenseClient<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Expenses.
		 * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
		 * @example
		 * // Delete a few Expenses
		 * const { count } = await prisma.expense.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ExpenseDeleteManyArgs>(
			args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Expenses.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Expenses
		 * const expense = await prisma.expense.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ExpenseUpdateManyArgs>(
			args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Expenses and returns the data updated in the database.
		 * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
		 * @example
		 * // Update many Expenses
		 * const expense = await prisma.expense.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Expenses and only return the `id`
		 * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(
			args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Expense.
		 * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
		 * @example
		 * // Update or create a Expense
		 * const expense = await prisma.expense.upsert({
		 *   create: {
		 *     // ... data to create a Expense
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Expense we want to update
		 *   }
		 * })
		 */
		upsert<T extends ExpenseUpsertArgs>(
			args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>
		): Prisma__ExpenseClient<
			$Result.GetResult<
				Prisma.$ExpensePayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Expenses.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
		 * @example
		 * // Count the number of Expenses
		 * const count = await prisma.expense.count({
		 *   where: {
		 *     // ... the filter for the Expenses we want to count
		 *   }
		 * })
		 **/
		count<T extends ExpenseCountArgs>(
			args?: Subset<T, ExpenseCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], ExpenseCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Expense.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends ExpenseAggregateArgs>(
			args: Subset<T, ExpenseAggregateArgs>
		): Prisma.PrismaPromise<GetExpenseAggregateType<T>>;

		/**
		 * Group by Expense.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends ExpenseGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ExpenseGroupByArgs["orderBy"] }
				: { orderBy?: ExpenseGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors
			? GetExpenseGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Expense model
		 */
		readonly fields: ExpenseFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Expense.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ExpenseClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Expense model
	 */
	interface ExpenseFieldRefs {
		readonly id: FieldRef<"Expense", "String">;
		readonly category: FieldRef<"Expense", "String">;
		readonly amount: FieldRef<"Expense", "Float">;
		readonly timestamp: FieldRef<"Expense", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * Expense findUnique
	 */
	export type ExpenseFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * Filter, which Expense to fetch.
		 */
		where: ExpenseWhereUniqueInput;
	};

	/**
	 * Expense findUniqueOrThrow
	 */
	export type ExpenseFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * Filter, which Expense to fetch.
		 */
		where: ExpenseWhereUniqueInput;
	};

	/**
	 * Expense findFirst
	 */
	export type ExpenseFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * Filter, which Expense to fetch.
		 */
		where?: ExpenseWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Expenses to fetch.
		 */
		orderBy?:
			| ExpenseOrderByWithRelationInput
			| ExpenseOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Expenses.
		 */
		cursor?: ExpenseWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Expenses from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Expenses.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Expenses.
		 */
		distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
	};

	/**
	 * Expense findFirstOrThrow
	 */
	export type ExpenseFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * Filter, which Expense to fetch.
		 */
		where?: ExpenseWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Expenses to fetch.
		 */
		orderBy?:
			| ExpenseOrderByWithRelationInput
			| ExpenseOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Expenses.
		 */
		cursor?: ExpenseWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Expenses from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Expenses.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Expenses.
		 */
		distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
	};

	/**
	 * Expense findMany
	 */
	export type ExpenseFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * Filter, which Expenses to fetch.
		 */
		where?: ExpenseWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Expenses to fetch.
		 */
		orderBy?:
			| ExpenseOrderByWithRelationInput
			| ExpenseOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Expenses.
		 */
		cursor?: ExpenseWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Expenses from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Expenses.
		 */
		skip?: number;
		distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
	};

	/**
	 * Expense create
	 */
	export type ExpenseCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * The data needed to create a Expense.
		 */
		data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>;
	};

	/**
	 * Expense createMany
	 */
	export type ExpenseCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Expenses.
		 */
		data: ExpenseCreateManyInput | ExpenseCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Expense createManyAndReturn
	 */
	export type ExpenseCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * The data used to create many Expenses.
		 */
		data: ExpenseCreateManyInput | ExpenseCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Expense update
	 */
	export type ExpenseUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * The data needed to update a Expense.
		 */
		data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>;
		/**
		 * Choose, which Expense to update.
		 */
		where: ExpenseWhereUniqueInput;
	};

	/**
	 * Expense updateMany
	 */
	export type ExpenseUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Expenses.
		 */
		data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>;
		/**
		 * Filter which Expenses to update
		 */
		where?: ExpenseWhereInput;
		/**
		 * Limit how many Expenses to update.
		 */
		limit?: number;
	};

	/**
	 * Expense updateManyAndReturn
	 */
	export type ExpenseUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * The data used to update Expenses.
		 */
		data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>;
		/**
		 * Filter which Expenses to update
		 */
		where?: ExpenseWhereInput;
		/**
		 * Limit how many Expenses to update.
		 */
		limit?: number;
	};

	/**
	 * Expense upsert
	 */
	export type ExpenseUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * The filter to search for the Expense to update in case it exists.
		 */
		where: ExpenseWhereUniqueInput;
		/**
		 * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
		 */
		create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>;
		/**
		 * In case the Expense was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>;
	};

	/**
	 * Expense delete
	 */
	export type ExpenseDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
		/**
		 * Filter which Expense to delete.
		 */
		where: ExpenseWhereUniqueInput;
	};

	/**
	 * Expense deleteMany
	 */
	export type ExpenseDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Expenses to delete
		 */
		where?: ExpenseWhereInput;
		/**
		 * Limit how many Expenses to delete.
		 */
		limit?: number;
	};

	/**
	 * Expense without action
	 */
	export type ExpenseDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Expense
		 */
		select?: ExpenseSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Expense
		 */
		omit?: ExpenseOmit<ExtArgs> | null;
	};

	/**
	 * Model SalesSummary
	 */

	export type AggregateSalesSummary = {
		_count: SalesSummaryCountAggregateOutputType | null;
		_avg: SalesSummaryAvgAggregateOutputType | null;
		_sum: SalesSummarySumAggregateOutputType | null;
		_min: SalesSummaryMinAggregateOutputType | null;
		_max: SalesSummaryMaxAggregateOutputType | null;
	};

	export type SalesSummaryAvgAggregateOutputType = {
		totalValue: number | null;
		changePercentage: number | null;
	};

	export type SalesSummarySumAggregateOutputType = {
		totalValue: number | null;
		changePercentage: number | null;
	};

	export type SalesSummaryMinAggregateOutputType = {
		id: string | null;
		totalValue: number | null;
		changePercentage: number | null;
		date: Date | null;
	};

	export type SalesSummaryMaxAggregateOutputType = {
		id: string | null;
		totalValue: number | null;
		changePercentage: number | null;
		date: Date | null;
	};

	export type SalesSummaryCountAggregateOutputType = {
		id: number;
		totalValue: number;
		changePercentage: number;
		date: number;
		_all: number;
	};

	export type SalesSummaryAvgAggregateInputType = {
		totalValue?: true;
		changePercentage?: true;
	};

	export type SalesSummarySumAggregateInputType = {
		totalValue?: true;
		changePercentage?: true;
	};

	export type SalesSummaryMinAggregateInputType = {
		id?: true;
		totalValue?: true;
		changePercentage?: true;
		date?: true;
	};

	export type SalesSummaryMaxAggregateInputType = {
		id?: true;
		totalValue?: true;
		changePercentage?: true;
		date?: true;
	};

	export type SalesSummaryCountAggregateInputType = {
		id?: true;
		totalValue?: true;
		changePercentage?: true;
		date?: true;
		_all?: true;
	};

	export type SalesSummaryAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which SalesSummary to aggregate.
		 */
		where?: SalesSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of SalesSummaries to fetch.
		 */
		orderBy?:
			| SalesSummaryOrderByWithRelationInput
			| SalesSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: SalesSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` SalesSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` SalesSummaries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned SalesSummaries
		 **/
		_count?: true | SalesSummaryCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: SalesSummaryAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: SalesSummarySumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: SalesSummaryMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: SalesSummaryMaxAggregateInputType;
	};

	export type GetSalesSummaryAggregateType<
		T extends SalesSummaryAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateSalesSummary]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateSalesSummary[P]>
			: GetScalarType<T[P], AggregateSalesSummary[P]>;
	};

	export type SalesSummaryGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: SalesSummaryWhereInput;
		orderBy?:
			| SalesSummaryOrderByWithAggregationInput
			| SalesSummaryOrderByWithAggregationInput[];
		by: SalesSummaryScalarFieldEnum[] | SalesSummaryScalarFieldEnum;
		having?: SalesSummaryScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: SalesSummaryCountAggregateInputType | true;
		_avg?: SalesSummaryAvgAggregateInputType;
		_sum?: SalesSummarySumAggregateInputType;
		_min?: SalesSummaryMinAggregateInputType;
		_max?: SalesSummaryMaxAggregateInputType;
	};

	export type SalesSummaryGroupByOutputType = {
		id: string;
		totalValue: number;
		changePercentage: number | null;
		date: Date;
		_count: SalesSummaryCountAggregateOutputType | null;
		_avg: SalesSummaryAvgAggregateOutputType | null;
		_sum: SalesSummarySumAggregateOutputType | null;
		_min: SalesSummaryMinAggregateOutputType | null;
		_max: SalesSummaryMaxAggregateOutputType | null;
	};

	type GetSalesSummaryGroupByPayload<T extends SalesSummaryGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<SalesSummaryGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof SalesSummaryGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], SalesSummaryGroupByOutputType[P]>
						: GetScalarType<T[P], SalesSummaryGroupByOutputType[P]>;
				}
			>
		>;

	export type SalesSummarySelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			totalValue?: boolean;
			changePercentage?: boolean;
			date?: boolean;
		},
		ExtArgs["result"]["salesSummary"]
	>;

	export type SalesSummarySelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			totalValue?: boolean;
			changePercentage?: boolean;
			date?: boolean;
		},
		ExtArgs["result"]["salesSummary"]
	>;

	export type SalesSummarySelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			totalValue?: boolean;
			changePercentage?: boolean;
			date?: boolean;
		},
		ExtArgs["result"]["salesSummary"]
	>;

	export type SalesSummarySelectScalar = {
		id?: boolean;
		totalValue?: boolean;
		changePercentage?: boolean;
		date?: boolean;
	};

	export type SalesSummaryOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "totalValue" | "changePercentage" | "date",
		ExtArgs["result"]["salesSummary"]
	>;

	export type $SalesSummaryPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "SalesSummary";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				totalValue: number;
				changePercentage: number | null;
				date: Date;
			},
			ExtArgs["result"]["salesSummary"]
		>;
		composites: {};
	};

	type SalesSummaryGetPayload<
		S extends boolean | null | undefined | SalesSummaryDefaultArgs,
	> = $Result.GetResult<Prisma.$SalesSummaryPayload, S>;

	type SalesSummaryCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		SalesSummaryFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: SalesSummaryCountAggregateInputType | true;
	};

	export interface SalesSummaryDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["SalesSummary"];
			meta: { name: "SalesSummary" };
		};
		/**
		 * Find zero or one SalesSummary that matches the filter.
		 * @param {SalesSummaryFindUniqueArgs} args - Arguments to find a SalesSummary
		 * @example
		 * // Get one SalesSummary
		 * const salesSummary = await prisma.salesSummary.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends SalesSummaryFindUniqueArgs>(
			args: SelectSubset<T, SalesSummaryFindUniqueArgs<ExtArgs>>
		): Prisma__SalesSummaryClient<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one SalesSummary that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {SalesSummaryFindUniqueOrThrowArgs} args - Arguments to find a SalesSummary
		 * @example
		 * // Get one SalesSummary
		 * const salesSummary = await prisma.salesSummary.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends SalesSummaryFindUniqueOrThrowArgs>(
			args: SelectSubset<T, SalesSummaryFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__SalesSummaryClient<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first SalesSummary that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SalesSummaryFindFirstArgs} args - Arguments to find a SalesSummary
		 * @example
		 * // Get one SalesSummary
		 * const salesSummary = await prisma.salesSummary.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends SalesSummaryFindFirstArgs>(
			args?: SelectSubset<T, SalesSummaryFindFirstArgs<ExtArgs>>
		): Prisma__SalesSummaryClient<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first SalesSummary that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SalesSummaryFindFirstOrThrowArgs} args - Arguments to find a SalesSummary
		 * @example
		 * // Get one SalesSummary
		 * const salesSummary = await prisma.salesSummary.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends SalesSummaryFindFirstOrThrowArgs>(
			args?: SelectSubset<T, SalesSummaryFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__SalesSummaryClient<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more SalesSummaries that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SalesSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all SalesSummaries
		 * const salesSummaries = await prisma.salesSummary.findMany()
		 *
		 * // Get first 10 SalesSummaries
		 * const salesSummaries = await prisma.salesSummary.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const salesSummaryWithIdOnly = await prisma.salesSummary.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends SalesSummaryFindManyArgs>(
			args?: SelectSubset<T, SalesSummaryFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a SalesSummary.
		 * @param {SalesSummaryCreateArgs} args - Arguments to create a SalesSummary.
		 * @example
		 * // Create one SalesSummary
		 * const SalesSummary = await prisma.salesSummary.create({
		 *   data: {
		 *     // ... data to create a SalesSummary
		 *   }
		 * })
		 *
		 */
		create<T extends SalesSummaryCreateArgs>(
			args: SelectSubset<T, SalesSummaryCreateArgs<ExtArgs>>
		): Prisma__SalesSummaryClient<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many SalesSummaries.
		 * @param {SalesSummaryCreateManyArgs} args - Arguments to create many SalesSummaries.
		 * @example
		 * // Create many SalesSummaries
		 * const salesSummary = await prisma.salesSummary.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends SalesSummaryCreateManyArgs>(
			args?: SelectSubset<T, SalesSummaryCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many SalesSummaries and returns the data saved in the database.
		 * @param {SalesSummaryCreateManyAndReturnArgs} args - Arguments to create many SalesSummaries.
		 * @example
		 * // Create many SalesSummaries
		 * const salesSummary = await prisma.salesSummary.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many SalesSummaries and only return the `id`
		 * const salesSummaryWithIdOnly = await prisma.salesSummary.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends SalesSummaryCreateManyAndReturnArgs>(
			args?: SelectSubset<T, SalesSummaryCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a SalesSummary.
		 * @param {SalesSummaryDeleteArgs} args - Arguments to delete one SalesSummary.
		 * @example
		 * // Delete one SalesSummary
		 * const SalesSummary = await prisma.salesSummary.delete({
		 *   where: {
		 *     // ... filter to delete one SalesSummary
		 *   }
		 * })
		 *
		 */
		delete<T extends SalesSummaryDeleteArgs>(
			args: SelectSubset<T, SalesSummaryDeleteArgs<ExtArgs>>
		): Prisma__SalesSummaryClient<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one SalesSummary.
		 * @param {SalesSummaryUpdateArgs} args - Arguments to update one SalesSummary.
		 * @example
		 * // Update one SalesSummary
		 * const salesSummary = await prisma.salesSummary.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends SalesSummaryUpdateArgs>(
			args: SelectSubset<T, SalesSummaryUpdateArgs<ExtArgs>>
		): Prisma__SalesSummaryClient<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more SalesSummaries.
		 * @param {SalesSummaryDeleteManyArgs} args - Arguments to filter SalesSummaries to delete.
		 * @example
		 * // Delete a few SalesSummaries
		 * const { count } = await prisma.salesSummary.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends SalesSummaryDeleteManyArgs>(
			args?: SelectSubset<T, SalesSummaryDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more SalesSummaries.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SalesSummaryUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many SalesSummaries
		 * const salesSummary = await prisma.salesSummary.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends SalesSummaryUpdateManyArgs>(
			args: SelectSubset<T, SalesSummaryUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more SalesSummaries and returns the data updated in the database.
		 * @param {SalesSummaryUpdateManyAndReturnArgs} args - Arguments to update many SalesSummaries.
		 * @example
		 * // Update many SalesSummaries
		 * const salesSummary = await prisma.salesSummary.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more SalesSummaries and only return the `id`
		 * const salesSummaryWithIdOnly = await prisma.salesSummary.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends SalesSummaryUpdateManyAndReturnArgs>(
			args: SelectSubset<T, SalesSummaryUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one SalesSummary.
		 * @param {SalesSummaryUpsertArgs} args - Arguments to update or create a SalesSummary.
		 * @example
		 * // Update or create a SalesSummary
		 * const salesSummary = await prisma.salesSummary.upsert({
		 *   create: {
		 *     // ... data to create a SalesSummary
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the SalesSummary we want to update
		 *   }
		 * })
		 */
		upsert<T extends SalesSummaryUpsertArgs>(
			args: SelectSubset<T, SalesSummaryUpsertArgs<ExtArgs>>
		): Prisma__SalesSummaryClient<
			$Result.GetResult<
				Prisma.$SalesSummaryPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of SalesSummaries.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SalesSummaryCountArgs} args - Arguments to filter SalesSummaries to count.
		 * @example
		 * // Count the number of SalesSummaries
		 * const count = await prisma.salesSummary.count({
		 *   where: {
		 *     // ... the filter for the SalesSummaries we want to count
		 *   }
		 * })
		 **/
		count<T extends SalesSummaryCountArgs>(
			args?: Subset<T, SalesSummaryCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], SalesSummaryCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a SalesSummary.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SalesSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends SalesSummaryAggregateArgs>(
			args: Subset<T, SalesSummaryAggregateArgs>
		): Prisma.PrismaPromise<GetSalesSummaryAggregateType<T>>;

		/**
		 * Group by SalesSummary.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SalesSummaryGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends SalesSummaryGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: SalesSummaryGroupByArgs["orderBy"] }
				: { orderBy?: SalesSummaryGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, SalesSummaryGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetSalesSummaryGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the SalesSummary model
		 */
		readonly fields: SalesSummaryFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for SalesSummary.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__SalesSummaryClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the SalesSummary model
	 */
	interface SalesSummaryFieldRefs {
		readonly id: FieldRef<"SalesSummary", "String">;
		readonly totalValue: FieldRef<"SalesSummary", "Float">;
		readonly changePercentage: FieldRef<"SalesSummary", "Float">;
		readonly date: FieldRef<"SalesSummary", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * SalesSummary findUnique
	 */
	export type SalesSummaryFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which SalesSummary to fetch.
		 */
		where: SalesSummaryWhereUniqueInput;
	};

	/**
	 * SalesSummary findUniqueOrThrow
	 */
	export type SalesSummaryFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which SalesSummary to fetch.
		 */
		where: SalesSummaryWhereUniqueInput;
	};

	/**
	 * SalesSummary findFirst
	 */
	export type SalesSummaryFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which SalesSummary to fetch.
		 */
		where?: SalesSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of SalesSummaries to fetch.
		 */
		orderBy?:
			| SalesSummaryOrderByWithRelationInput
			| SalesSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for SalesSummaries.
		 */
		cursor?: SalesSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` SalesSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` SalesSummaries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of SalesSummaries.
		 */
		distinct?: SalesSummaryScalarFieldEnum | SalesSummaryScalarFieldEnum[];
	};

	/**
	 * SalesSummary findFirstOrThrow
	 */
	export type SalesSummaryFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which SalesSummary to fetch.
		 */
		where?: SalesSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of SalesSummaries to fetch.
		 */
		orderBy?:
			| SalesSummaryOrderByWithRelationInput
			| SalesSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for SalesSummaries.
		 */
		cursor?: SalesSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` SalesSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` SalesSummaries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of SalesSummaries.
		 */
		distinct?: SalesSummaryScalarFieldEnum | SalesSummaryScalarFieldEnum[];
	};

	/**
	 * SalesSummary findMany
	 */
	export type SalesSummaryFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which SalesSummaries to fetch.
		 */
		where?: SalesSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of SalesSummaries to fetch.
		 */
		orderBy?:
			| SalesSummaryOrderByWithRelationInput
			| SalesSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing SalesSummaries.
		 */
		cursor?: SalesSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` SalesSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` SalesSummaries.
		 */
		skip?: number;
		distinct?: SalesSummaryScalarFieldEnum | SalesSummaryScalarFieldEnum[];
	};

	/**
	 * SalesSummary create
	 */
	export type SalesSummaryCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * The data needed to create a SalesSummary.
		 */
		data: XOR<SalesSummaryCreateInput, SalesSummaryUncheckedCreateInput>;
	};

	/**
	 * SalesSummary createMany
	 */
	export type SalesSummaryCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many SalesSummaries.
		 */
		data: SalesSummaryCreateManyInput | SalesSummaryCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * SalesSummary createManyAndReturn
	 */
	export type SalesSummaryCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * The data used to create many SalesSummaries.
		 */
		data: SalesSummaryCreateManyInput | SalesSummaryCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * SalesSummary update
	 */
	export type SalesSummaryUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * The data needed to update a SalesSummary.
		 */
		data: XOR<SalesSummaryUpdateInput, SalesSummaryUncheckedUpdateInput>;
		/**
		 * Choose, which SalesSummary to update.
		 */
		where: SalesSummaryWhereUniqueInput;
	};

	/**
	 * SalesSummary updateMany
	 */
	export type SalesSummaryUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update SalesSummaries.
		 */
		data: XOR<
			SalesSummaryUpdateManyMutationInput,
			SalesSummaryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which SalesSummaries to update
		 */
		where?: SalesSummaryWhereInput;
		/**
		 * Limit how many SalesSummaries to update.
		 */
		limit?: number;
	};

	/**
	 * SalesSummary updateManyAndReturn
	 */
	export type SalesSummaryUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * The data used to update SalesSummaries.
		 */
		data: XOR<
			SalesSummaryUpdateManyMutationInput,
			SalesSummaryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which SalesSummaries to update
		 */
		where?: SalesSummaryWhereInput;
		/**
		 * Limit how many SalesSummaries to update.
		 */
		limit?: number;
	};

	/**
	 * SalesSummary upsert
	 */
	export type SalesSummaryUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * The filter to search for the SalesSummary to update in case it exists.
		 */
		where: SalesSummaryWhereUniqueInput;
		/**
		 * In case the SalesSummary found by the `where` argument doesn't exist, create a new SalesSummary with this data.
		 */
		create: XOR<SalesSummaryCreateInput, SalesSummaryUncheckedCreateInput>;
		/**
		 * In case the SalesSummary was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<SalesSummaryUpdateInput, SalesSummaryUncheckedUpdateInput>;
	};

	/**
	 * SalesSummary delete
	 */
	export type SalesSummaryDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
		/**
		 * Filter which SalesSummary to delete.
		 */
		where: SalesSummaryWhereUniqueInput;
	};

	/**
	 * SalesSummary deleteMany
	 */
	export type SalesSummaryDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which SalesSummaries to delete
		 */
		where?: SalesSummaryWhereInput;
		/**
		 * Limit how many SalesSummaries to delete.
		 */
		limit?: number;
	};

	/**
	 * SalesSummary without action
	 */
	export type SalesSummaryDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the SalesSummary
		 */
		select?: SalesSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the SalesSummary
		 */
		omit?: SalesSummaryOmit<ExtArgs> | null;
	};

	/**
	 * Model PurchaseSummary
	 */

	export type AggregatePurchaseSummary = {
		_count: PurchaseSummaryCountAggregateOutputType | null;
		_avg: PurchaseSummaryAvgAggregateOutputType | null;
		_sum: PurchaseSummarySumAggregateOutputType | null;
		_min: PurchaseSummaryMinAggregateOutputType | null;
		_max: PurchaseSummaryMaxAggregateOutputType | null;
	};

	export type PurchaseSummaryAvgAggregateOutputType = {
		totalPurchased: number | null;
		changePercentage: number | null;
	};

	export type PurchaseSummarySumAggregateOutputType = {
		totalPurchased: number | null;
		changePercentage: number | null;
	};

	export type PurchaseSummaryMinAggregateOutputType = {
		id: string | null;
		totalPurchased: number | null;
		changePercentage: number | null;
		date: Date | null;
	};

	export type PurchaseSummaryMaxAggregateOutputType = {
		id: string | null;
		totalPurchased: number | null;
		changePercentage: number | null;
		date: Date | null;
	};

	export type PurchaseSummaryCountAggregateOutputType = {
		id: number;
		totalPurchased: number;
		changePercentage: number;
		date: number;
		_all: number;
	};

	export type PurchaseSummaryAvgAggregateInputType = {
		totalPurchased?: true;
		changePercentage?: true;
	};

	export type PurchaseSummarySumAggregateInputType = {
		totalPurchased?: true;
		changePercentage?: true;
	};

	export type PurchaseSummaryMinAggregateInputType = {
		id?: true;
		totalPurchased?: true;
		changePercentage?: true;
		date?: true;
	};

	export type PurchaseSummaryMaxAggregateInputType = {
		id?: true;
		totalPurchased?: true;
		changePercentage?: true;
		date?: true;
	};

	export type PurchaseSummaryCountAggregateInputType = {
		id?: true;
		totalPurchased?: true;
		changePercentage?: true;
		date?: true;
		_all?: true;
	};

	export type PurchaseSummaryAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which PurchaseSummary to aggregate.
		 */
		where?: PurchaseSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of PurchaseSummaries to fetch.
		 */
		orderBy?:
			| PurchaseSummaryOrderByWithRelationInput
			| PurchaseSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: PurchaseSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` PurchaseSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` PurchaseSummaries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned PurchaseSummaries
		 **/
		_count?: true | PurchaseSummaryCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: PurchaseSummaryAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: PurchaseSummarySumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: PurchaseSummaryMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: PurchaseSummaryMaxAggregateInputType;
	};

	export type GetPurchaseSummaryAggregateType<
		T extends PurchaseSummaryAggregateArgs,
	> = {
		[P in keyof T & keyof AggregatePurchaseSummary]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregatePurchaseSummary[P]>
			: GetScalarType<T[P], AggregatePurchaseSummary[P]>;
	};

	export type PurchaseSummaryGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: PurchaseSummaryWhereInput;
		orderBy?:
			| PurchaseSummaryOrderByWithAggregationInput
			| PurchaseSummaryOrderByWithAggregationInput[];
		by: PurchaseSummaryScalarFieldEnum[] | PurchaseSummaryScalarFieldEnum;
		having?: PurchaseSummaryScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: PurchaseSummaryCountAggregateInputType | true;
		_avg?: PurchaseSummaryAvgAggregateInputType;
		_sum?: PurchaseSummarySumAggregateInputType;
		_min?: PurchaseSummaryMinAggregateInputType;
		_max?: PurchaseSummaryMaxAggregateInputType;
	};

	export type PurchaseSummaryGroupByOutputType = {
		id: string;
		totalPurchased: number;
		changePercentage: number | null;
		date: Date;
		_count: PurchaseSummaryCountAggregateOutputType | null;
		_avg: PurchaseSummaryAvgAggregateOutputType | null;
		_sum: PurchaseSummarySumAggregateOutputType | null;
		_min: PurchaseSummaryMinAggregateOutputType | null;
		_max: PurchaseSummaryMaxAggregateOutputType | null;
	};

	type GetPurchaseSummaryGroupByPayload<T extends PurchaseSummaryGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<PurchaseSummaryGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof PurchaseSummaryGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], PurchaseSummaryGroupByOutputType[P]>
						: GetScalarType<T[P], PurchaseSummaryGroupByOutputType[P]>;
				}
			>
		>;

	export type PurchaseSummarySelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			totalPurchased?: boolean;
			changePercentage?: boolean;
			date?: boolean;
		},
		ExtArgs["result"]["purchaseSummary"]
	>;

	export type PurchaseSummarySelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			totalPurchased?: boolean;
			changePercentage?: boolean;
			date?: boolean;
		},
		ExtArgs["result"]["purchaseSummary"]
	>;

	export type PurchaseSummarySelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			totalPurchased?: boolean;
			changePercentage?: boolean;
			date?: boolean;
		},
		ExtArgs["result"]["purchaseSummary"]
	>;

	export type PurchaseSummarySelectScalar = {
		id?: boolean;
		totalPurchased?: boolean;
		changePercentage?: boolean;
		date?: boolean;
	};

	export type PurchaseSummaryOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "totalPurchased" | "changePercentage" | "date",
		ExtArgs["result"]["purchaseSummary"]
	>;

	export type $PurchaseSummaryPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "PurchaseSummary";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				totalPurchased: number;
				changePercentage: number | null;
				date: Date;
			},
			ExtArgs["result"]["purchaseSummary"]
		>;
		composites: {};
	};

	type PurchaseSummaryGetPayload<
		S extends boolean | null | undefined | PurchaseSummaryDefaultArgs,
	> = $Result.GetResult<Prisma.$PurchaseSummaryPayload, S>;

	type PurchaseSummaryCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		PurchaseSummaryFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: PurchaseSummaryCountAggregateInputType | true;
	};

	export interface PurchaseSummaryDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["PurchaseSummary"];
			meta: { name: "PurchaseSummary" };
		};
		/**
		 * Find zero or one PurchaseSummary that matches the filter.
		 * @param {PurchaseSummaryFindUniqueArgs} args - Arguments to find a PurchaseSummary
		 * @example
		 * // Get one PurchaseSummary
		 * const purchaseSummary = await prisma.purchaseSummary.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends PurchaseSummaryFindUniqueArgs>(
			args: SelectSubset<T, PurchaseSummaryFindUniqueArgs<ExtArgs>>
		): Prisma__PurchaseSummaryClient<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one PurchaseSummary that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {PurchaseSummaryFindUniqueOrThrowArgs} args - Arguments to find a PurchaseSummary
		 * @example
		 * // Get one PurchaseSummary
		 * const purchaseSummary = await prisma.purchaseSummary.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends PurchaseSummaryFindUniqueOrThrowArgs>(
			args: SelectSubset<T, PurchaseSummaryFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__PurchaseSummaryClient<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first PurchaseSummary that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseSummaryFindFirstArgs} args - Arguments to find a PurchaseSummary
		 * @example
		 * // Get one PurchaseSummary
		 * const purchaseSummary = await prisma.purchaseSummary.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends PurchaseSummaryFindFirstArgs>(
			args?: SelectSubset<T, PurchaseSummaryFindFirstArgs<ExtArgs>>
		): Prisma__PurchaseSummaryClient<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first PurchaseSummary that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseSummaryFindFirstOrThrowArgs} args - Arguments to find a PurchaseSummary
		 * @example
		 * // Get one PurchaseSummary
		 * const purchaseSummary = await prisma.purchaseSummary.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends PurchaseSummaryFindFirstOrThrowArgs>(
			args?: SelectSubset<T, PurchaseSummaryFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__PurchaseSummaryClient<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more PurchaseSummaries that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all PurchaseSummaries
		 * const purchaseSummaries = await prisma.purchaseSummary.findMany()
		 *
		 * // Get first 10 PurchaseSummaries
		 * const purchaseSummaries = await prisma.purchaseSummary.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const purchaseSummaryWithIdOnly = await prisma.purchaseSummary.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends PurchaseSummaryFindManyArgs>(
			args?: SelectSubset<T, PurchaseSummaryFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a PurchaseSummary.
		 * @param {PurchaseSummaryCreateArgs} args - Arguments to create a PurchaseSummary.
		 * @example
		 * // Create one PurchaseSummary
		 * const PurchaseSummary = await prisma.purchaseSummary.create({
		 *   data: {
		 *     // ... data to create a PurchaseSummary
		 *   }
		 * })
		 *
		 */
		create<T extends PurchaseSummaryCreateArgs>(
			args: SelectSubset<T, PurchaseSummaryCreateArgs<ExtArgs>>
		): Prisma__PurchaseSummaryClient<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many PurchaseSummaries.
		 * @param {PurchaseSummaryCreateManyArgs} args - Arguments to create many PurchaseSummaries.
		 * @example
		 * // Create many PurchaseSummaries
		 * const purchaseSummary = await prisma.purchaseSummary.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends PurchaseSummaryCreateManyArgs>(
			args?: SelectSubset<T, PurchaseSummaryCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many PurchaseSummaries and returns the data saved in the database.
		 * @param {PurchaseSummaryCreateManyAndReturnArgs} args - Arguments to create many PurchaseSummaries.
		 * @example
		 * // Create many PurchaseSummaries
		 * const purchaseSummary = await prisma.purchaseSummary.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many PurchaseSummaries and only return the `id`
		 * const purchaseSummaryWithIdOnly = await prisma.purchaseSummary.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends PurchaseSummaryCreateManyAndReturnArgs>(
			args?: SelectSubset<T, PurchaseSummaryCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a PurchaseSummary.
		 * @param {PurchaseSummaryDeleteArgs} args - Arguments to delete one PurchaseSummary.
		 * @example
		 * // Delete one PurchaseSummary
		 * const PurchaseSummary = await prisma.purchaseSummary.delete({
		 *   where: {
		 *     // ... filter to delete one PurchaseSummary
		 *   }
		 * })
		 *
		 */
		delete<T extends PurchaseSummaryDeleteArgs>(
			args: SelectSubset<T, PurchaseSummaryDeleteArgs<ExtArgs>>
		): Prisma__PurchaseSummaryClient<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one PurchaseSummary.
		 * @param {PurchaseSummaryUpdateArgs} args - Arguments to update one PurchaseSummary.
		 * @example
		 * // Update one PurchaseSummary
		 * const purchaseSummary = await prisma.purchaseSummary.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends PurchaseSummaryUpdateArgs>(
			args: SelectSubset<T, PurchaseSummaryUpdateArgs<ExtArgs>>
		): Prisma__PurchaseSummaryClient<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more PurchaseSummaries.
		 * @param {PurchaseSummaryDeleteManyArgs} args - Arguments to filter PurchaseSummaries to delete.
		 * @example
		 * // Delete a few PurchaseSummaries
		 * const { count } = await prisma.purchaseSummary.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends PurchaseSummaryDeleteManyArgs>(
			args?: SelectSubset<T, PurchaseSummaryDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more PurchaseSummaries.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseSummaryUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many PurchaseSummaries
		 * const purchaseSummary = await prisma.purchaseSummary.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends PurchaseSummaryUpdateManyArgs>(
			args: SelectSubset<T, PurchaseSummaryUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more PurchaseSummaries and returns the data updated in the database.
		 * @param {PurchaseSummaryUpdateManyAndReturnArgs} args - Arguments to update many PurchaseSummaries.
		 * @example
		 * // Update many PurchaseSummaries
		 * const purchaseSummary = await prisma.purchaseSummary.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more PurchaseSummaries and only return the `id`
		 * const purchaseSummaryWithIdOnly = await prisma.purchaseSummary.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends PurchaseSummaryUpdateManyAndReturnArgs>(
			args: SelectSubset<T, PurchaseSummaryUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one PurchaseSummary.
		 * @param {PurchaseSummaryUpsertArgs} args - Arguments to update or create a PurchaseSummary.
		 * @example
		 * // Update or create a PurchaseSummary
		 * const purchaseSummary = await prisma.purchaseSummary.upsert({
		 *   create: {
		 *     // ... data to create a PurchaseSummary
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the PurchaseSummary we want to update
		 *   }
		 * })
		 */
		upsert<T extends PurchaseSummaryUpsertArgs>(
			args: SelectSubset<T, PurchaseSummaryUpsertArgs<ExtArgs>>
		): Prisma__PurchaseSummaryClient<
			$Result.GetResult<
				Prisma.$PurchaseSummaryPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of PurchaseSummaries.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseSummaryCountArgs} args - Arguments to filter PurchaseSummaries to count.
		 * @example
		 * // Count the number of PurchaseSummaries
		 * const count = await prisma.purchaseSummary.count({
		 *   where: {
		 *     // ... the filter for the PurchaseSummaries we want to count
		 *   }
		 * })
		 **/
		count<T extends PurchaseSummaryCountArgs>(
			args?: Subset<T, PurchaseSummaryCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], PurchaseSummaryCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a PurchaseSummary.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends PurchaseSummaryAggregateArgs>(
			args: Subset<T, PurchaseSummaryAggregateArgs>
		): Prisma.PrismaPromise<GetPurchaseSummaryAggregateType<T>>;

		/**
		 * Group by PurchaseSummary.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PurchaseSummaryGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends PurchaseSummaryGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: PurchaseSummaryGroupByArgs["orderBy"] }
				: { orderBy?: PurchaseSummaryGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, PurchaseSummaryGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetPurchaseSummaryGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the PurchaseSummary model
		 */
		readonly fields: PurchaseSummaryFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for PurchaseSummary.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__PurchaseSummaryClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the PurchaseSummary model
	 */
	interface PurchaseSummaryFieldRefs {
		readonly id: FieldRef<"PurchaseSummary", "String">;
		readonly totalPurchased: FieldRef<"PurchaseSummary", "Float">;
		readonly changePercentage: FieldRef<"PurchaseSummary", "Float">;
		readonly date: FieldRef<"PurchaseSummary", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * PurchaseSummary findUnique
	 */
	export type PurchaseSummaryFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which PurchaseSummary to fetch.
		 */
		where: PurchaseSummaryWhereUniqueInput;
	};

	/**
	 * PurchaseSummary findUniqueOrThrow
	 */
	export type PurchaseSummaryFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which PurchaseSummary to fetch.
		 */
		where: PurchaseSummaryWhereUniqueInput;
	};

	/**
	 * PurchaseSummary findFirst
	 */
	export type PurchaseSummaryFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which PurchaseSummary to fetch.
		 */
		where?: PurchaseSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of PurchaseSummaries to fetch.
		 */
		orderBy?:
			| PurchaseSummaryOrderByWithRelationInput
			| PurchaseSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for PurchaseSummaries.
		 */
		cursor?: PurchaseSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` PurchaseSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` PurchaseSummaries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of PurchaseSummaries.
		 */
		distinct?:
			| PurchaseSummaryScalarFieldEnum
			| PurchaseSummaryScalarFieldEnum[];
	};

	/**
	 * PurchaseSummary findFirstOrThrow
	 */
	export type PurchaseSummaryFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which PurchaseSummary to fetch.
		 */
		where?: PurchaseSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of PurchaseSummaries to fetch.
		 */
		orderBy?:
			| PurchaseSummaryOrderByWithRelationInput
			| PurchaseSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for PurchaseSummaries.
		 */
		cursor?: PurchaseSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` PurchaseSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` PurchaseSummaries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of PurchaseSummaries.
		 */
		distinct?:
			| PurchaseSummaryScalarFieldEnum
			| PurchaseSummaryScalarFieldEnum[];
	};

	/**
	 * PurchaseSummary findMany
	 */
	export type PurchaseSummaryFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * Filter, which PurchaseSummaries to fetch.
		 */
		where?: PurchaseSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of PurchaseSummaries to fetch.
		 */
		orderBy?:
			| PurchaseSummaryOrderByWithRelationInput
			| PurchaseSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing PurchaseSummaries.
		 */
		cursor?: PurchaseSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` PurchaseSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` PurchaseSummaries.
		 */
		skip?: number;
		distinct?:
			| PurchaseSummaryScalarFieldEnum
			| PurchaseSummaryScalarFieldEnum[];
	};

	/**
	 * PurchaseSummary create
	 */
	export type PurchaseSummaryCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * The data needed to create a PurchaseSummary.
		 */
		data: XOR<PurchaseSummaryCreateInput, PurchaseSummaryUncheckedCreateInput>;
	};

	/**
	 * PurchaseSummary createMany
	 */
	export type PurchaseSummaryCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many PurchaseSummaries.
		 */
		data: PurchaseSummaryCreateManyInput | PurchaseSummaryCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * PurchaseSummary createManyAndReturn
	 */
	export type PurchaseSummaryCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * The data used to create many PurchaseSummaries.
		 */
		data: PurchaseSummaryCreateManyInput | PurchaseSummaryCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * PurchaseSummary update
	 */
	export type PurchaseSummaryUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * The data needed to update a PurchaseSummary.
		 */
		data: XOR<PurchaseSummaryUpdateInput, PurchaseSummaryUncheckedUpdateInput>;
		/**
		 * Choose, which PurchaseSummary to update.
		 */
		where: PurchaseSummaryWhereUniqueInput;
	};

	/**
	 * PurchaseSummary updateMany
	 */
	export type PurchaseSummaryUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update PurchaseSummaries.
		 */
		data: XOR<
			PurchaseSummaryUpdateManyMutationInput,
			PurchaseSummaryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which PurchaseSummaries to update
		 */
		where?: PurchaseSummaryWhereInput;
		/**
		 * Limit how many PurchaseSummaries to update.
		 */
		limit?: number;
	};

	/**
	 * PurchaseSummary updateManyAndReturn
	 */
	export type PurchaseSummaryUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * The data used to update PurchaseSummaries.
		 */
		data: XOR<
			PurchaseSummaryUpdateManyMutationInput,
			PurchaseSummaryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which PurchaseSummaries to update
		 */
		where?: PurchaseSummaryWhereInput;
		/**
		 * Limit how many PurchaseSummaries to update.
		 */
		limit?: number;
	};

	/**
	 * PurchaseSummary upsert
	 */
	export type PurchaseSummaryUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * The filter to search for the PurchaseSummary to update in case it exists.
		 */
		where: PurchaseSummaryWhereUniqueInput;
		/**
		 * In case the PurchaseSummary found by the `where` argument doesn't exist, create a new PurchaseSummary with this data.
		 */
		create: XOR<
			PurchaseSummaryCreateInput,
			PurchaseSummaryUncheckedCreateInput
		>;
		/**
		 * In case the PurchaseSummary was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<
			PurchaseSummaryUpdateInput,
			PurchaseSummaryUncheckedUpdateInput
		>;
	};

	/**
	 * PurchaseSummary delete
	 */
	export type PurchaseSummaryDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
		/**
		 * Filter which PurchaseSummary to delete.
		 */
		where: PurchaseSummaryWhereUniqueInput;
	};

	/**
	 * PurchaseSummary deleteMany
	 */
	export type PurchaseSummaryDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which PurchaseSummaries to delete
		 */
		where?: PurchaseSummaryWhereInput;
		/**
		 * Limit how many PurchaseSummaries to delete.
		 */
		limit?: number;
	};

	/**
	 * PurchaseSummary without action
	 */
	export type PurchaseSummaryDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PurchaseSummary
		 */
		select?: PurchaseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PurchaseSummary
		 */
		omit?: PurchaseSummaryOmit<ExtArgs> | null;
	};

	/**
	 * Model ExpenseSummary
	 */

	export type AggregateExpenseSummary = {
		_count: ExpenseSummaryCountAggregateOutputType | null;
		_avg: ExpenseSummaryAvgAggregateOutputType | null;
		_sum: ExpenseSummarySumAggregateOutputType | null;
		_min: ExpenseSummaryMinAggregateOutputType | null;
		_max: ExpenseSummaryMaxAggregateOutputType | null;
	};

	export type ExpenseSummaryAvgAggregateOutputType = {
		totalExpenses: number | null;
	};

	export type ExpenseSummarySumAggregateOutputType = {
		totalExpenses: number | null;
	};

	export type ExpenseSummaryMinAggregateOutputType = {
		id: string | null;
		totalExpenses: number | null;
		date: Date | null;
	};

	export type ExpenseSummaryMaxAggregateOutputType = {
		id: string | null;
		totalExpenses: number | null;
		date: Date | null;
	};

	export type ExpenseSummaryCountAggregateOutputType = {
		id: number;
		totalExpenses: number;
		date: number;
		_all: number;
	};

	export type ExpenseSummaryAvgAggregateInputType = {
		totalExpenses?: true;
	};

	export type ExpenseSummarySumAggregateInputType = {
		totalExpenses?: true;
	};

	export type ExpenseSummaryMinAggregateInputType = {
		id?: true;
		totalExpenses?: true;
		date?: true;
	};

	export type ExpenseSummaryMaxAggregateInputType = {
		id?: true;
		totalExpenses?: true;
		date?: true;
	};

	export type ExpenseSummaryCountAggregateInputType = {
		id?: true;
		totalExpenses?: true;
		date?: true;
		_all?: true;
	};

	export type ExpenseSummaryAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which ExpenseSummary to aggregate.
		 */
		where?: ExpenseSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ExpenseSummaries to fetch.
		 */
		orderBy?:
			| ExpenseSummaryOrderByWithRelationInput
			| ExpenseSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ExpenseSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ExpenseSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ExpenseSummaries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned ExpenseSummaries
		 **/
		_count?: true | ExpenseSummaryCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ExpenseSummaryAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ExpenseSummarySumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ExpenseSummaryMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ExpenseSummaryMaxAggregateInputType;
	};

	export type GetExpenseSummaryAggregateType<
		T extends ExpenseSummaryAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateExpenseSummary]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateExpenseSummary[P]>
			: GetScalarType<T[P], AggregateExpenseSummary[P]>;
	};

	export type ExpenseSummaryGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ExpenseSummaryWhereInput;
		orderBy?:
			| ExpenseSummaryOrderByWithAggregationInput
			| ExpenseSummaryOrderByWithAggregationInput[];
		by: ExpenseSummaryScalarFieldEnum[] | ExpenseSummaryScalarFieldEnum;
		having?: ExpenseSummaryScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ExpenseSummaryCountAggregateInputType | true;
		_avg?: ExpenseSummaryAvgAggregateInputType;
		_sum?: ExpenseSummarySumAggregateInputType;
		_min?: ExpenseSummaryMinAggregateInputType;
		_max?: ExpenseSummaryMaxAggregateInputType;
	};

	export type ExpenseSummaryGroupByOutputType = {
		id: string;
		totalExpenses: number;
		date: Date;
		_count: ExpenseSummaryCountAggregateOutputType | null;
		_avg: ExpenseSummaryAvgAggregateOutputType | null;
		_sum: ExpenseSummarySumAggregateOutputType | null;
		_min: ExpenseSummaryMinAggregateOutputType | null;
		_max: ExpenseSummaryMaxAggregateOutputType | null;
	};

	type GetExpenseSummaryGroupByPayload<T extends ExpenseSummaryGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<ExpenseSummaryGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof ExpenseSummaryGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], ExpenseSummaryGroupByOutputType[P]>
						: GetScalarType<T[P], ExpenseSummaryGroupByOutputType[P]>;
				}
			>
		>;

	export type ExpenseSummarySelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			totalExpenses?: boolean;
			date?: boolean;
			ExpenseByCategory?:
				| boolean
				| ExpenseSummary$ExpenseByCategoryArgs<ExtArgs>;
			_count?: boolean | ExpenseSummaryCountOutputTypeDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["expenseSummary"]
	>;

	export type ExpenseSummarySelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			totalExpenses?: boolean;
			date?: boolean;
		},
		ExtArgs["result"]["expenseSummary"]
	>;

	export type ExpenseSummarySelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			totalExpenses?: boolean;
			date?: boolean;
		},
		ExtArgs["result"]["expenseSummary"]
	>;

	export type ExpenseSummarySelectScalar = {
		id?: boolean;
		totalExpenses?: boolean;
		date?: boolean;
	};

	export type ExpenseSummaryOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "totalExpenses" | "date",
		ExtArgs["result"]["expenseSummary"]
	>;
	export type ExpenseSummaryInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		ExpenseByCategory?: boolean | ExpenseSummary$ExpenseByCategoryArgs<ExtArgs>;
		_count?: boolean | ExpenseSummaryCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type ExpenseSummaryIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};
	export type ExpenseSummaryIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};

	export type $ExpenseSummaryPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "ExpenseSummary";
		objects: {
			ExpenseByCategory: Prisma.$ExpenseByCategoryPayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				totalExpenses: number;
				date: Date;
			},
			ExtArgs["result"]["expenseSummary"]
		>;
		composites: {};
	};

	type ExpenseSummaryGetPayload<
		S extends boolean | null | undefined | ExpenseSummaryDefaultArgs,
	> = $Result.GetResult<Prisma.$ExpenseSummaryPayload, S>;

	type ExpenseSummaryCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		ExpenseSummaryFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: ExpenseSummaryCountAggregateInputType | true;
	};

	export interface ExpenseSummaryDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["ExpenseSummary"];
			meta: { name: "ExpenseSummary" };
		};
		/**
		 * Find zero or one ExpenseSummary that matches the filter.
		 * @param {ExpenseSummaryFindUniqueArgs} args - Arguments to find a ExpenseSummary
		 * @example
		 * // Get one ExpenseSummary
		 * const expenseSummary = await prisma.expenseSummary.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ExpenseSummaryFindUniqueArgs>(
			args: SelectSubset<T, ExpenseSummaryFindUniqueArgs<ExtArgs>>
		): Prisma__ExpenseSummaryClient<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one ExpenseSummary that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ExpenseSummaryFindUniqueOrThrowArgs} args - Arguments to find a ExpenseSummary
		 * @example
		 * // Get one ExpenseSummary
		 * const expenseSummary = await prisma.expenseSummary.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ExpenseSummaryFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ExpenseSummaryFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__ExpenseSummaryClient<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first ExpenseSummary that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseSummaryFindFirstArgs} args - Arguments to find a ExpenseSummary
		 * @example
		 * // Get one ExpenseSummary
		 * const expenseSummary = await prisma.expenseSummary.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ExpenseSummaryFindFirstArgs>(
			args?: SelectSubset<T, ExpenseSummaryFindFirstArgs<ExtArgs>>
		): Prisma__ExpenseSummaryClient<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first ExpenseSummary that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseSummaryFindFirstOrThrowArgs} args - Arguments to find a ExpenseSummary
		 * @example
		 * // Get one ExpenseSummary
		 * const expenseSummary = await prisma.expenseSummary.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ExpenseSummaryFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ExpenseSummaryFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__ExpenseSummaryClient<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more ExpenseSummaries that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all ExpenseSummaries
		 * const expenseSummaries = await prisma.expenseSummary.findMany()
		 *
		 * // Get first 10 ExpenseSummaries
		 * const expenseSummaries = await prisma.expenseSummary.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const expenseSummaryWithIdOnly = await prisma.expenseSummary.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ExpenseSummaryFindManyArgs>(
			args?: SelectSubset<T, ExpenseSummaryFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a ExpenseSummary.
		 * @param {ExpenseSummaryCreateArgs} args - Arguments to create a ExpenseSummary.
		 * @example
		 * // Create one ExpenseSummary
		 * const ExpenseSummary = await prisma.expenseSummary.create({
		 *   data: {
		 *     // ... data to create a ExpenseSummary
		 *   }
		 * })
		 *
		 */
		create<T extends ExpenseSummaryCreateArgs>(
			args: SelectSubset<T, ExpenseSummaryCreateArgs<ExtArgs>>
		): Prisma__ExpenseSummaryClient<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many ExpenseSummaries.
		 * @param {ExpenseSummaryCreateManyArgs} args - Arguments to create many ExpenseSummaries.
		 * @example
		 * // Create many ExpenseSummaries
		 * const expenseSummary = await prisma.expenseSummary.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ExpenseSummaryCreateManyArgs>(
			args?: SelectSubset<T, ExpenseSummaryCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many ExpenseSummaries and returns the data saved in the database.
		 * @param {ExpenseSummaryCreateManyAndReturnArgs} args - Arguments to create many ExpenseSummaries.
		 * @example
		 * // Create many ExpenseSummaries
		 * const expenseSummary = await prisma.expenseSummary.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many ExpenseSummaries and only return the `id`
		 * const expenseSummaryWithIdOnly = await prisma.expenseSummary.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ExpenseSummaryCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ExpenseSummaryCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a ExpenseSummary.
		 * @param {ExpenseSummaryDeleteArgs} args - Arguments to delete one ExpenseSummary.
		 * @example
		 * // Delete one ExpenseSummary
		 * const ExpenseSummary = await prisma.expenseSummary.delete({
		 *   where: {
		 *     // ... filter to delete one ExpenseSummary
		 *   }
		 * })
		 *
		 */
		delete<T extends ExpenseSummaryDeleteArgs>(
			args: SelectSubset<T, ExpenseSummaryDeleteArgs<ExtArgs>>
		): Prisma__ExpenseSummaryClient<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one ExpenseSummary.
		 * @param {ExpenseSummaryUpdateArgs} args - Arguments to update one ExpenseSummary.
		 * @example
		 * // Update one ExpenseSummary
		 * const expenseSummary = await prisma.expenseSummary.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ExpenseSummaryUpdateArgs>(
			args: SelectSubset<T, ExpenseSummaryUpdateArgs<ExtArgs>>
		): Prisma__ExpenseSummaryClient<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more ExpenseSummaries.
		 * @param {ExpenseSummaryDeleteManyArgs} args - Arguments to filter ExpenseSummaries to delete.
		 * @example
		 * // Delete a few ExpenseSummaries
		 * const { count } = await prisma.expenseSummary.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ExpenseSummaryDeleteManyArgs>(
			args?: SelectSubset<T, ExpenseSummaryDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more ExpenseSummaries.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseSummaryUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many ExpenseSummaries
		 * const expenseSummary = await prisma.expenseSummary.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ExpenseSummaryUpdateManyArgs>(
			args: SelectSubset<T, ExpenseSummaryUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more ExpenseSummaries and returns the data updated in the database.
		 * @param {ExpenseSummaryUpdateManyAndReturnArgs} args - Arguments to update many ExpenseSummaries.
		 * @example
		 * // Update many ExpenseSummaries
		 * const expenseSummary = await prisma.expenseSummary.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more ExpenseSummaries and only return the `id`
		 * const expenseSummaryWithIdOnly = await prisma.expenseSummary.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends ExpenseSummaryUpdateManyAndReturnArgs>(
			args: SelectSubset<T, ExpenseSummaryUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one ExpenseSummary.
		 * @param {ExpenseSummaryUpsertArgs} args - Arguments to update or create a ExpenseSummary.
		 * @example
		 * // Update or create a ExpenseSummary
		 * const expenseSummary = await prisma.expenseSummary.upsert({
		 *   create: {
		 *     // ... data to create a ExpenseSummary
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the ExpenseSummary we want to update
		 *   }
		 * })
		 */
		upsert<T extends ExpenseSummaryUpsertArgs>(
			args: SelectSubset<T, ExpenseSummaryUpsertArgs<ExtArgs>>
		): Prisma__ExpenseSummaryClient<
			$Result.GetResult<
				Prisma.$ExpenseSummaryPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of ExpenseSummaries.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseSummaryCountArgs} args - Arguments to filter ExpenseSummaries to count.
		 * @example
		 * // Count the number of ExpenseSummaries
		 * const count = await prisma.expenseSummary.count({
		 *   where: {
		 *     // ... the filter for the ExpenseSummaries we want to count
		 *   }
		 * })
		 **/
		count<T extends ExpenseSummaryCountArgs>(
			args?: Subset<T, ExpenseSummaryCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], ExpenseSummaryCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a ExpenseSummary.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends ExpenseSummaryAggregateArgs>(
			args: Subset<T, ExpenseSummaryAggregateArgs>
		): Prisma.PrismaPromise<GetExpenseSummaryAggregateType<T>>;

		/**
		 * Group by ExpenseSummary.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseSummaryGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends ExpenseSummaryGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ExpenseSummaryGroupByArgs["orderBy"] }
				: { orderBy?: ExpenseSummaryGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, ExpenseSummaryGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetExpenseSummaryGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the ExpenseSummary model
		 */
		readonly fields: ExpenseSummaryFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for ExpenseSummary.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ExpenseSummaryClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		ExpenseByCategory<
			T extends ExpenseSummary$ExpenseByCategoryArgs<ExtArgs> = {},
		>(
			args?: Subset<T, ExpenseSummary$ExpenseByCategoryArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$ExpenseByCategoryPayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the ExpenseSummary model
	 */
	interface ExpenseSummaryFieldRefs {
		readonly id: FieldRef<"ExpenseSummary", "String">;
		readonly totalExpenses: FieldRef<"ExpenseSummary", "Float">;
		readonly date: FieldRef<"ExpenseSummary", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * ExpenseSummary findUnique
	 */
	export type ExpenseSummaryFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseSummary to fetch.
		 */
		where: ExpenseSummaryWhereUniqueInput;
	};

	/**
	 * ExpenseSummary findUniqueOrThrow
	 */
	export type ExpenseSummaryFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseSummary to fetch.
		 */
		where: ExpenseSummaryWhereUniqueInput;
	};

	/**
	 * ExpenseSummary findFirst
	 */
	export type ExpenseSummaryFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseSummary to fetch.
		 */
		where?: ExpenseSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ExpenseSummaries to fetch.
		 */
		orderBy?:
			| ExpenseSummaryOrderByWithRelationInput
			| ExpenseSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for ExpenseSummaries.
		 */
		cursor?: ExpenseSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ExpenseSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ExpenseSummaries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of ExpenseSummaries.
		 */
		distinct?: ExpenseSummaryScalarFieldEnum | ExpenseSummaryScalarFieldEnum[];
	};

	/**
	 * ExpenseSummary findFirstOrThrow
	 */
	export type ExpenseSummaryFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseSummary to fetch.
		 */
		where?: ExpenseSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ExpenseSummaries to fetch.
		 */
		orderBy?:
			| ExpenseSummaryOrderByWithRelationInput
			| ExpenseSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for ExpenseSummaries.
		 */
		cursor?: ExpenseSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ExpenseSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ExpenseSummaries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of ExpenseSummaries.
		 */
		distinct?: ExpenseSummaryScalarFieldEnum | ExpenseSummaryScalarFieldEnum[];
	};

	/**
	 * ExpenseSummary findMany
	 */
	export type ExpenseSummaryFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseSummaries to fetch.
		 */
		where?: ExpenseSummaryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ExpenseSummaries to fetch.
		 */
		orderBy?:
			| ExpenseSummaryOrderByWithRelationInput
			| ExpenseSummaryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing ExpenseSummaries.
		 */
		cursor?: ExpenseSummaryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ExpenseSummaries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ExpenseSummaries.
		 */
		skip?: number;
		distinct?: ExpenseSummaryScalarFieldEnum | ExpenseSummaryScalarFieldEnum[];
	};

	/**
	 * ExpenseSummary create
	 */
	export type ExpenseSummaryCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
		/**
		 * The data needed to create a ExpenseSummary.
		 */
		data: XOR<ExpenseSummaryCreateInput, ExpenseSummaryUncheckedCreateInput>;
	};

	/**
	 * ExpenseSummary createMany
	 */
	export type ExpenseSummaryCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many ExpenseSummaries.
		 */
		data: ExpenseSummaryCreateManyInput | ExpenseSummaryCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * ExpenseSummary createManyAndReturn
	 */
	export type ExpenseSummaryCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * The data used to create many ExpenseSummaries.
		 */
		data: ExpenseSummaryCreateManyInput | ExpenseSummaryCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * ExpenseSummary update
	 */
	export type ExpenseSummaryUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
		/**
		 * The data needed to update a ExpenseSummary.
		 */
		data: XOR<ExpenseSummaryUpdateInput, ExpenseSummaryUncheckedUpdateInput>;
		/**
		 * Choose, which ExpenseSummary to update.
		 */
		where: ExpenseSummaryWhereUniqueInput;
	};

	/**
	 * ExpenseSummary updateMany
	 */
	export type ExpenseSummaryUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update ExpenseSummaries.
		 */
		data: XOR<
			ExpenseSummaryUpdateManyMutationInput,
			ExpenseSummaryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which ExpenseSummaries to update
		 */
		where?: ExpenseSummaryWhereInput;
		/**
		 * Limit how many ExpenseSummaries to update.
		 */
		limit?: number;
	};

	/**
	 * ExpenseSummary updateManyAndReturn
	 */
	export type ExpenseSummaryUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * The data used to update ExpenseSummaries.
		 */
		data: XOR<
			ExpenseSummaryUpdateManyMutationInput,
			ExpenseSummaryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which ExpenseSummaries to update
		 */
		where?: ExpenseSummaryWhereInput;
		/**
		 * Limit how many ExpenseSummaries to update.
		 */
		limit?: number;
	};

	/**
	 * ExpenseSummary upsert
	 */
	export type ExpenseSummaryUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
		/**
		 * The filter to search for the ExpenseSummary to update in case it exists.
		 */
		where: ExpenseSummaryWhereUniqueInput;
		/**
		 * In case the ExpenseSummary found by the `where` argument doesn't exist, create a new ExpenseSummary with this data.
		 */
		create: XOR<ExpenseSummaryCreateInput, ExpenseSummaryUncheckedCreateInput>;
		/**
		 * In case the ExpenseSummary was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<ExpenseSummaryUpdateInput, ExpenseSummaryUncheckedUpdateInput>;
	};

	/**
	 * ExpenseSummary delete
	 */
	export type ExpenseSummaryDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
		/**
		 * Filter which ExpenseSummary to delete.
		 */
		where: ExpenseSummaryWhereUniqueInput;
	};

	/**
	 * ExpenseSummary deleteMany
	 */
	export type ExpenseSummaryDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which ExpenseSummaries to delete
		 */
		where?: ExpenseSummaryWhereInput;
		/**
		 * Limit how many ExpenseSummaries to delete.
		 */
		limit?: number;
	};

	/**
	 * ExpenseSummary.ExpenseByCategory
	 */
	export type ExpenseSummary$ExpenseByCategoryArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		where?: ExpenseByCategoryWhereInput;
		orderBy?:
			| ExpenseByCategoryOrderByWithRelationInput
			| ExpenseByCategoryOrderByWithRelationInput[];
		cursor?: ExpenseByCategoryWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?:
			| ExpenseByCategoryScalarFieldEnum
			| ExpenseByCategoryScalarFieldEnum[];
	};

	/**
	 * ExpenseSummary without action
	 */
	export type ExpenseSummaryDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseSummary
		 */
		select?: ExpenseSummarySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseSummary
		 */
		omit?: ExpenseSummaryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseSummaryInclude<ExtArgs> | null;
	};

	/**
	 * Model ExpenseByCategory
	 */

	export type AggregateExpenseByCategory = {
		_count: ExpenseByCategoryCountAggregateOutputType | null;
		_avg: ExpenseByCategoryAvgAggregateOutputType | null;
		_sum: ExpenseByCategorySumAggregateOutputType | null;
		_min: ExpenseByCategoryMinAggregateOutputType | null;
		_max: ExpenseByCategoryMaxAggregateOutputType | null;
	};

	export type ExpenseByCategoryAvgAggregateOutputType = {
		amount: number | null;
	};

	export type ExpenseByCategorySumAggregateOutputType = {
		amount: bigint | null;
	};

	export type ExpenseByCategoryMinAggregateOutputType = {
		id: string | null;
		expenseSummaryId: string | null;
		category: string | null;
		amount: bigint | null;
		date: Date | null;
	};

	export type ExpenseByCategoryMaxAggregateOutputType = {
		id: string | null;
		expenseSummaryId: string | null;
		category: string | null;
		amount: bigint | null;
		date: Date | null;
	};

	export type ExpenseByCategoryCountAggregateOutputType = {
		id: number;
		expenseSummaryId: number;
		category: number;
		amount: number;
		date: number;
		_all: number;
	};

	export type ExpenseByCategoryAvgAggregateInputType = {
		amount?: true;
	};

	export type ExpenseByCategorySumAggregateInputType = {
		amount?: true;
	};

	export type ExpenseByCategoryMinAggregateInputType = {
		id?: true;
		expenseSummaryId?: true;
		category?: true;
		amount?: true;
		date?: true;
	};

	export type ExpenseByCategoryMaxAggregateInputType = {
		id?: true;
		expenseSummaryId?: true;
		category?: true;
		amount?: true;
		date?: true;
	};

	export type ExpenseByCategoryCountAggregateInputType = {
		id?: true;
		expenseSummaryId?: true;
		category?: true;
		amount?: true;
		date?: true;
		_all?: true;
	};

	export type ExpenseByCategoryAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which ExpenseByCategory to aggregate.
		 */
		where?: ExpenseByCategoryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ExpenseByCategories to fetch.
		 */
		orderBy?:
			| ExpenseByCategoryOrderByWithRelationInput
			| ExpenseByCategoryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ExpenseByCategoryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ExpenseByCategories from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ExpenseByCategories.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned ExpenseByCategories
		 **/
		_count?: true | ExpenseByCategoryCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ExpenseByCategoryAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ExpenseByCategorySumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ExpenseByCategoryMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ExpenseByCategoryMaxAggregateInputType;
	};

	export type GetExpenseByCategoryAggregateType<
		T extends ExpenseByCategoryAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateExpenseByCategory]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateExpenseByCategory[P]>
			: GetScalarType<T[P], AggregateExpenseByCategory[P]>;
	};

	export type ExpenseByCategoryGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ExpenseByCategoryWhereInput;
		orderBy?:
			| ExpenseByCategoryOrderByWithAggregationInput
			| ExpenseByCategoryOrderByWithAggregationInput[];
		by: ExpenseByCategoryScalarFieldEnum[] | ExpenseByCategoryScalarFieldEnum;
		having?: ExpenseByCategoryScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ExpenseByCategoryCountAggregateInputType | true;
		_avg?: ExpenseByCategoryAvgAggregateInputType;
		_sum?: ExpenseByCategorySumAggregateInputType;
		_min?: ExpenseByCategoryMinAggregateInputType;
		_max?: ExpenseByCategoryMaxAggregateInputType;
	};

	export type ExpenseByCategoryGroupByOutputType = {
		id: string;
		expenseSummaryId: string;
		category: string;
		amount: bigint;
		date: Date;
		_count: ExpenseByCategoryCountAggregateOutputType | null;
		_avg: ExpenseByCategoryAvgAggregateOutputType | null;
		_sum: ExpenseByCategorySumAggregateOutputType | null;
		_min: ExpenseByCategoryMinAggregateOutputType | null;
		_max: ExpenseByCategoryMaxAggregateOutputType | null;
	};

	type GetExpenseByCategoryGroupByPayload<
		T extends ExpenseByCategoryGroupByArgs,
	> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<ExpenseByCategoryGroupByOutputType, T["by"]> & {
				[P in keyof T &
					keyof ExpenseByCategoryGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], ExpenseByCategoryGroupByOutputType[P]>
					: GetScalarType<T[P], ExpenseByCategoryGroupByOutputType[P]>;
			}
		>
	>;

	export type ExpenseByCategorySelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			expenseSummaryId?: boolean;
			category?: boolean;
			amount?: boolean;
			date?: boolean;
			expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["expenseByCategory"]
	>;

	export type ExpenseByCategorySelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			expenseSummaryId?: boolean;
			category?: boolean;
			amount?: boolean;
			date?: boolean;
			expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["expenseByCategory"]
	>;

	export type ExpenseByCategorySelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			expenseSummaryId?: boolean;
			category?: boolean;
			amount?: boolean;
			date?: boolean;
			expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["expenseByCategory"]
	>;

	export type ExpenseByCategorySelectScalar = {
		id?: boolean;
		expenseSummaryId?: boolean;
		category?: boolean;
		amount?: boolean;
		date?: boolean;
	};

	export type ExpenseByCategoryOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "expenseSummaryId" | "category" | "amount" | "date",
		ExtArgs["result"]["expenseByCategory"]
	>;
	export type ExpenseByCategoryInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>;
	};
	export type ExpenseByCategoryIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>;
	};
	export type ExpenseByCategoryIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>;
	};

	export type $ExpenseByCategoryPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "ExpenseByCategory";
		objects: {
			expenseSummary: Prisma.$ExpenseSummaryPayload<ExtArgs>;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				expenseSummaryId: string;
				category: string;
				amount: bigint;
				date: Date;
			},
			ExtArgs["result"]["expenseByCategory"]
		>;
		composites: {};
	};

	type ExpenseByCategoryGetPayload<
		S extends boolean | null | undefined | ExpenseByCategoryDefaultArgs,
	> = $Result.GetResult<Prisma.$ExpenseByCategoryPayload, S>;

	type ExpenseByCategoryCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		ExpenseByCategoryFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: ExpenseByCategoryCountAggregateInputType | true;
	};

	export interface ExpenseByCategoryDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["ExpenseByCategory"];
			meta: { name: "ExpenseByCategory" };
		};
		/**
		 * Find zero or one ExpenseByCategory that matches the filter.
		 * @param {ExpenseByCategoryFindUniqueArgs} args - Arguments to find a ExpenseByCategory
		 * @example
		 * // Get one ExpenseByCategory
		 * const expenseByCategory = await prisma.expenseByCategory.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ExpenseByCategoryFindUniqueArgs>(
			args: SelectSubset<T, ExpenseByCategoryFindUniqueArgs<ExtArgs>>
		): Prisma__ExpenseByCategoryClient<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one ExpenseByCategory that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ExpenseByCategoryFindUniqueOrThrowArgs} args - Arguments to find a ExpenseByCategory
		 * @example
		 * // Get one ExpenseByCategory
		 * const expenseByCategory = await prisma.expenseByCategory.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ExpenseByCategoryFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ExpenseByCategoryFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__ExpenseByCategoryClient<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first ExpenseByCategory that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseByCategoryFindFirstArgs} args - Arguments to find a ExpenseByCategory
		 * @example
		 * // Get one ExpenseByCategory
		 * const expenseByCategory = await prisma.expenseByCategory.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ExpenseByCategoryFindFirstArgs>(
			args?: SelectSubset<T, ExpenseByCategoryFindFirstArgs<ExtArgs>>
		): Prisma__ExpenseByCategoryClient<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first ExpenseByCategory that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseByCategoryFindFirstOrThrowArgs} args - Arguments to find a ExpenseByCategory
		 * @example
		 * // Get one ExpenseByCategory
		 * const expenseByCategory = await prisma.expenseByCategory.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ExpenseByCategoryFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ExpenseByCategoryFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__ExpenseByCategoryClient<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more ExpenseByCategories that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseByCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all ExpenseByCategories
		 * const expenseByCategories = await prisma.expenseByCategory.findMany()
		 *
		 * // Get first 10 ExpenseByCategories
		 * const expenseByCategories = await prisma.expenseByCategory.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const expenseByCategoryWithIdOnly = await prisma.expenseByCategory.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ExpenseByCategoryFindManyArgs>(
			args?: SelectSubset<T, ExpenseByCategoryFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a ExpenseByCategory.
		 * @param {ExpenseByCategoryCreateArgs} args - Arguments to create a ExpenseByCategory.
		 * @example
		 * // Create one ExpenseByCategory
		 * const ExpenseByCategory = await prisma.expenseByCategory.create({
		 *   data: {
		 *     // ... data to create a ExpenseByCategory
		 *   }
		 * })
		 *
		 */
		create<T extends ExpenseByCategoryCreateArgs>(
			args: SelectSubset<T, ExpenseByCategoryCreateArgs<ExtArgs>>
		): Prisma__ExpenseByCategoryClient<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many ExpenseByCategories.
		 * @param {ExpenseByCategoryCreateManyArgs} args - Arguments to create many ExpenseByCategories.
		 * @example
		 * // Create many ExpenseByCategories
		 * const expenseByCategory = await prisma.expenseByCategory.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ExpenseByCategoryCreateManyArgs>(
			args?: SelectSubset<T, ExpenseByCategoryCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many ExpenseByCategories and returns the data saved in the database.
		 * @param {ExpenseByCategoryCreateManyAndReturnArgs} args - Arguments to create many ExpenseByCategories.
		 * @example
		 * // Create many ExpenseByCategories
		 * const expenseByCategory = await prisma.expenseByCategory.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many ExpenseByCategories and only return the `id`
		 * const expenseByCategoryWithIdOnly = await prisma.expenseByCategory.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ExpenseByCategoryCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ExpenseByCategoryCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a ExpenseByCategory.
		 * @param {ExpenseByCategoryDeleteArgs} args - Arguments to delete one ExpenseByCategory.
		 * @example
		 * // Delete one ExpenseByCategory
		 * const ExpenseByCategory = await prisma.expenseByCategory.delete({
		 *   where: {
		 *     // ... filter to delete one ExpenseByCategory
		 *   }
		 * })
		 *
		 */
		delete<T extends ExpenseByCategoryDeleteArgs>(
			args: SelectSubset<T, ExpenseByCategoryDeleteArgs<ExtArgs>>
		): Prisma__ExpenseByCategoryClient<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one ExpenseByCategory.
		 * @param {ExpenseByCategoryUpdateArgs} args - Arguments to update one ExpenseByCategory.
		 * @example
		 * // Update one ExpenseByCategory
		 * const expenseByCategory = await prisma.expenseByCategory.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ExpenseByCategoryUpdateArgs>(
			args: SelectSubset<T, ExpenseByCategoryUpdateArgs<ExtArgs>>
		): Prisma__ExpenseByCategoryClient<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more ExpenseByCategories.
		 * @param {ExpenseByCategoryDeleteManyArgs} args - Arguments to filter ExpenseByCategories to delete.
		 * @example
		 * // Delete a few ExpenseByCategories
		 * const { count } = await prisma.expenseByCategory.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ExpenseByCategoryDeleteManyArgs>(
			args?: SelectSubset<T, ExpenseByCategoryDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more ExpenseByCategories.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseByCategoryUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many ExpenseByCategories
		 * const expenseByCategory = await prisma.expenseByCategory.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ExpenseByCategoryUpdateManyArgs>(
			args: SelectSubset<T, ExpenseByCategoryUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more ExpenseByCategories and returns the data updated in the database.
		 * @param {ExpenseByCategoryUpdateManyAndReturnArgs} args - Arguments to update many ExpenseByCategories.
		 * @example
		 * // Update many ExpenseByCategories
		 * const expenseByCategory = await prisma.expenseByCategory.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more ExpenseByCategories and only return the `id`
		 * const expenseByCategoryWithIdOnly = await prisma.expenseByCategory.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends ExpenseByCategoryUpdateManyAndReturnArgs>(
			args: SelectSubset<T, ExpenseByCategoryUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one ExpenseByCategory.
		 * @param {ExpenseByCategoryUpsertArgs} args - Arguments to update or create a ExpenseByCategory.
		 * @example
		 * // Update or create a ExpenseByCategory
		 * const expenseByCategory = await prisma.expenseByCategory.upsert({
		 *   create: {
		 *     // ... data to create a ExpenseByCategory
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the ExpenseByCategory we want to update
		 *   }
		 * })
		 */
		upsert<T extends ExpenseByCategoryUpsertArgs>(
			args: SelectSubset<T, ExpenseByCategoryUpsertArgs<ExtArgs>>
		): Prisma__ExpenseByCategoryClient<
			$Result.GetResult<
				Prisma.$ExpenseByCategoryPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of ExpenseByCategories.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseByCategoryCountArgs} args - Arguments to filter ExpenseByCategories to count.
		 * @example
		 * // Count the number of ExpenseByCategories
		 * const count = await prisma.expenseByCategory.count({
		 *   where: {
		 *     // ... the filter for the ExpenseByCategories we want to count
		 *   }
		 * })
		 **/
		count<T extends ExpenseByCategoryCountArgs>(
			args?: Subset<T, ExpenseByCategoryCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							ExpenseByCategoryCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a ExpenseByCategory.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseByCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends ExpenseByCategoryAggregateArgs>(
			args: Subset<T, ExpenseByCategoryAggregateArgs>
		): Prisma.PrismaPromise<GetExpenseByCategoryAggregateType<T>>;

		/**
		 * Group by ExpenseByCategory.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ExpenseByCategoryGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends ExpenseByCategoryGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ExpenseByCategoryGroupByArgs["orderBy"] }
				: { orderBy?: ExpenseByCategoryGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, ExpenseByCategoryGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetExpenseByCategoryGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the ExpenseByCategory model
		 */
		readonly fields: ExpenseByCategoryFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for ExpenseByCategory.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ExpenseByCategoryClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		expenseSummary<T extends ExpenseSummaryDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, ExpenseSummaryDefaultArgs<ExtArgs>>
		): Prisma__ExpenseSummaryClient<
			| $Result.GetResult<
					Prisma.$ExpenseSummaryPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the ExpenseByCategory model
	 */
	interface ExpenseByCategoryFieldRefs {
		readonly id: FieldRef<"ExpenseByCategory", "String">;
		readonly expenseSummaryId: FieldRef<"ExpenseByCategory", "String">;
		readonly category: FieldRef<"ExpenseByCategory", "String">;
		readonly amount: FieldRef<"ExpenseByCategory", "BigInt">;
		readonly date: FieldRef<"ExpenseByCategory", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * ExpenseByCategory findUnique
	 */
	export type ExpenseByCategoryFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseByCategory to fetch.
		 */
		where: ExpenseByCategoryWhereUniqueInput;
	};

	/**
	 * ExpenseByCategory findUniqueOrThrow
	 */
	export type ExpenseByCategoryFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseByCategory to fetch.
		 */
		where: ExpenseByCategoryWhereUniqueInput;
	};

	/**
	 * ExpenseByCategory findFirst
	 */
	export type ExpenseByCategoryFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseByCategory to fetch.
		 */
		where?: ExpenseByCategoryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ExpenseByCategories to fetch.
		 */
		orderBy?:
			| ExpenseByCategoryOrderByWithRelationInput
			| ExpenseByCategoryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for ExpenseByCategories.
		 */
		cursor?: ExpenseByCategoryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ExpenseByCategories from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ExpenseByCategories.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of ExpenseByCategories.
		 */
		distinct?:
			| ExpenseByCategoryScalarFieldEnum
			| ExpenseByCategoryScalarFieldEnum[];
	};

	/**
	 * ExpenseByCategory findFirstOrThrow
	 */
	export type ExpenseByCategoryFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseByCategory to fetch.
		 */
		where?: ExpenseByCategoryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ExpenseByCategories to fetch.
		 */
		orderBy?:
			| ExpenseByCategoryOrderByWithRelationInput
			| ExpenseByCategoryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for ExpenseByCategories.
		 */
		cursor?: ExpenseByCategoryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ExpenseByCategories from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ExpenseByCategories.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of ExpenseByCategories.
		 */
		distinct?:
			| ExpenseByCategoryScalarFieldEnum
			| ExpenseByCategoryScalarFieldEnum[];
	};

	/**
	 * ExpenseByCategory findMany
	 */
	export type ExpenseByCategoryFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		/**
		 * Filter, which ExpenseByCategories to fetch.
		 */
		where?: ExpenseByCategoryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ExpenseByCategories to fetch.
		 */
		orderBy?:
			| ExpenseByCategoryOrderByWithRelationInput
			| ExpenseByCategoryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing ExpenseByCategories.
		 */
		cursor?: ExpenseByCategoryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ExpenseByCategories from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ExpenseByCategories.
		 */
		skip?: number;
		distinct?:
			| ExpenseByCategoryScalarFieldEnum
			| ExpenseByCategoryScalarFieldEnum[];
	};

	/**
	 * ExpenseByCategory create
	 */
	export type ExpenseByCategoryCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		/**
		 * The data needed to create a ExpenseByCategory.
		 */
		data: XOR<
			ExpenseByCategoryCreateInput,
			ExpenseByCategoryUncheckedCreateInput
		>;
	};

	/**
	 * ExpenseByCategory createMany
	 */
	export type ExpenseByCategoryCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many ExpenseByCategories.
		 */
		data: ExpenseByCategoryCreateManyInput | ExpenseByCategoryCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * ExpenseByCategory createManyAndReturn
	 */
	export type ExpenseByCategoryCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * The data used to create many ExpenseByCategories.
		 */
		data: ExpenseByCategoryCreateManyInput | ExpenseByCategoryCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * ExpenseByCategory update
	 */
	export type ExpenseByCategoryUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		/**
		 * The data needed to update a ExpenseByCategory.
		 */
		data: XOR<
			ExpenseByCategoryUpdateInput,
			ExpenseByCategoryUncheckedUpdateInput
		>;
		/**
		 * Choose, which ExpenseByCategory to update.
		 */
		where: ExpenseByCategoryWhereUniqueInput;
	};

	/**
	 * ExpenseByCategory updateMany
	 */
	export type ExpenseByCategoryUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update ExpenseByCategories.
		 */
		data: XOR<
			ExpenseByCategoryUpdateManyMutationInput,
			ExpenseByCategoryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which ExpenseByCategories to update
		 */
		where?: ExpenseByCategoryWhereInput;
		/**
		 * Limit how many ExpenseByCategories to update.
		 */
		limit?: number;
	};

	/**
	 * ExpenseByCategory updateManyAndReturn
	 */
	export type ExpenseByCategoryUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * The data used to update ExpenseByCategories.
		 */
		data: XOR<
			ExpenseByCategoryUpdateManyMutationInput,
			ExpenseByCategoryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which ExpenseByCategories to update
		 */
		where?: ExpenseByCategoryWhereInput;
		/**
		 * Limit how many ExpenseByCategories to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * ExpenseByCategory upsert
	 */
	export type ExpenseByCategoryUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		/**
		 * The filter to search for the ExpenseByCategory to update in case it exists.
		 */
		where: ExpenseByCategoryWhereUniqueInput;
		/**
		 * In case the ExpenseByCategory found by the `where` argument doesn't exist, create a new ExpenseByCategory with this data.
		 */
		create: XOR<
			ExpenseByCategoryCreateInput,
			ExpenseByCategoryUncheckedCreateInput
		>;
		/**
		 * In case the ExpenseByCategory was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<
			ExpenseByCategoryUpdateInput,
			ExpenseByCategoryUncheckedUpdateInput
		>;
	};

	/**
	 * ExpenseByCategory delete
	 */
	export type ExpenseByCategoryDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
		/**
		 * Filter which ExpenseByCategory to delete.
		 */
		where: ExpenseByCategoryWhereUniqueInput;
	};

	/**
	 * ExpenseByCategory deleteMany
	 */
	export type ExpenseByCategoryDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which ExpenseByCategories to delete
		 */
		where?: ExpenseByCategoryWhereInput;
		/**
		 * Limit how many ExpenseByCategories to delete.
		 */
		limit?: number;
	};

	/**
	 * ExpenseByCategory without action
	 */
	export type ExpenseByCategoryDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ExpenseByCategory
		 */
		select?: ExpenseByCategorySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ExpenseByCategory
		 */
		omit?: ExpenseByCategoryOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ExpenseByCategoryInclude<ExtArgs> | null;
	};

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: "ReadUncommitted";
		ReadCommitted: "ReadCommitted";
		RepeatableRead: "RepeatableRead";
		Serializable: "Serializable";
	};

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

	export const UserScalarFieldEnum: {
		id: "id";
		name: "name";
		email: "email";
	};

	export type UserScalarFieldEnum =
		(typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

	export const ProductScalarFieldEnum: {
		id: "id";
		name: "name";
		price: "price";
		rating: "rating";
		stockQuantity: "stockQuantity";
	};

	export type ProductScalarFieldEnum =
		(typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];

	export const SaleScalarFieldEnum: {
		id: "id";
		productId: "productId";
		timestamp: "timestamp";
		quantity: "quantity";
		unitPrice: "unitPrice";
		totalAmount: "totalAmount";
	};

	export type SaleScalarFieldEnum =
		(typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum];

	export const PurchaseScalarFieldEnum: {
		id: "id";
		productId: "productId";
		timestamp: "timestamp";
		quantity: "quantity";
		unitCost: "unitCost";
		totalCost: "totalCost";
	};

	export type PurchaseScalarFieldEnum =
		(typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum];

	export const ExpenseScalarFieldEnum: {
		id: "id";
		category: "category";
		amount: "amount";
		timestamp: "timestamp";
	};

	export type ExpenseScalarFieldEnum =
		(typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];

	export const SalesSummaryScalarFieldEnum: {
		id: "id";
		totalValue: "totalValue";
		changePercentage: "changePercentage";
		date: "date";
	};

	export type SalesSummaryScalarFieldEnum =
		(typeof SalesSummaryScalarFieldEnum)[keyof typeof SalesSummaryScalarFieldEnum];

	export const PurchaseSummaryScalarFieldEnum: {
		id: "id";
		totalPurchased: "totalPurchased";
		changePercentage: "changePercentage";
		date: "date";
	};

	export type PurchaseSummaryScalarFieldEnum =
		(typeof PurchaseSummaryScalarFieldEnum)[keyof typeof PurchaseSummaryScalarFieldEnum];

	export const ExpenseSummaryScalarFieldEnum: {
		id: "id";
		totalExpenses: "totalExpenses";
		date: "date";
	};

	export type ExpenseSummaryScalarFieldEnum =
		(typeof ExpenseSummaryScalarFieldEnum)[keyof typeof ExpenseSummaryScalarFieldEnum];

	export const ExpenseByCategoryScalarFieldEnum: {
		id: "id";
		expenseSummaryId: "expenseSummaryId";
		category: "category";
		amount: "amount";
		date: "date";
	};

	export type ExpenseByCategoryScalarFieldEnum =
		(typeof ExpenseByCategoryScalarFieldEnum)[keyof typeof ExpenseByCategoryScalarFieldEnum];

	export const SortOrder: {
		asc: "asc";
		desc: "desc";
	};

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

	export const QueryMode: {
		default: "default";
		insensitive: "insensitive";
	};

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

	export const NullsOrder: {
		first: "first";
		last: "last";
	};

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String"
	>;

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String[]"
	>;

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float"
	>;

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float[]"
	>;

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int"
	>;

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int[]"
	>;

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime"
	>;

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime[]"
	>;

	/**
	 * Reference to a field of type 'BigInt'
	 */
	export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"BigInt"
	>;

	/**
	 * Reference to a field of type 'BigInt[]'
	 */
	export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"BigInt[]"
	>;

	/**
	 * Deep Input Types
	 */

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[];
		OR?: UserWhereInput[];
		NOT?: UserWhereInput | UserWhereInput[];
		id?: StringFilter<"User"> | string;
		name?: StringFilter<"User"> | string;
		email?: StringFilter<"User"> | string;
	};

	export type UserOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
	};

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: UserWhereInput | UserWhereInput[];
			OR?: UserWhereInput[];
			NOT?: UserWhereInput | UserWhereInput[];
			name?: StringFilter<"User"> | string;
			email?: StringFilter<"User"> | string;
		},
		"id"
	>;

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		_count?: UserCountOrderByAggregateInput;
		_max?: UserMaxOrderByAggregateInput;
		_min?: UserMinOrderByAggregateInput;
	};

	export type UserScalarWhereWithAggregatesInput = {
		AND?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		OR?: UserScalarWhereWithAggregatesInput[];
		NOT?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"User"> | string;
		name?: StringWithAggregatesFilter<"User"> | string;
		email?: StringWithAggregatesFilter<"User"> | string;
	};

	export type ProductWhereInput = {
		AND?: ProductWhereInput | ProductWhereInput[];
		OR?: ProductWhereInput[];
		NOT?: ProductWhereInput | ProductWhereInput[];
		id?: StringFilter<"Product"> | string;
		name?: StringFilter<"Product"> | string;
		price?: FloatFilter<"Product"> | number;
		rating?: FloatNullableFilter<"Product"> | number | null;
		stockQuantity?: IntFilter<"Product"> | number;
		Sales?: SaleListRelationFilter;
		Purchases?: PurchaseListRelationFilter;
	};

	export type ProductOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		rating?: SortOrderInput | SortOrder;
		stockQuantity?: SortOrder;
		Sales?: SaleOrderByRelationAggregateInput;
		Purchases?: PurchaseOrderByRelationAggregateInput;
	};

	export type ProductWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: ProductWhereInput | ProductWhereInput[];
			OR?: ProductWhereInput[];
			NOT?: ProductWhereInput | ProductWhereInput[];
			name?: StringFilter<"Product"> | string;
			price?: FloatFilter<"Product"> | number;
			rating?: FloatNullableFilter<"Product"> | number | null;
			stockQuantity?: IntFilter<"Product"> | number;
			Sales?: SaleListRelationFilter;
			Purchases?: PurchaseListRelationFilter;
		},
		"id"
	>;

	export type ProductOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		rating?: SortOrderInput | SortOrder;
		stockQuantity?: SortOrder;
		_count?: ProductCountOrderByAggregateInput;
		_avg?: ProductAvgOrderByAggregateInput;
		_max?: ProductMaxOrderByAggregateInput;
		_min?: ProductMinOrderByAggregateInput;
		_sum?: ProductSumOrderByAggregateInput;
	};

	export type ProductScalarWhereWithAggregatesInput = {
		AND?:
			| ProductScalarWhereWithAggregatesInput
			| ProductScalarWhereWithAggregatesInput[];
		OR?: ProductScalarWhereWithAggregatesInput[];
		NOT?:
			| ProductScalarWhereWithAggregatesInput
			| ProductScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"Product"> | string;
		name?: StringWithAggregatesFilter<"Product"> | string;
		price?: FloatWithAggregatesFilter<"Product"> | number;
		rating?: FloatNullableWithAggregatesFilter<"Product"> | number | null;
		stockQuantity?: IntWithAggregatesFilter<"Product"> | number;
	};

	export type SaleWhereInput = {
		AND?: SaleWhereInput | SaleWhereInput[];
		OR?: SaleWhereInput[];
		NOT?: SaleWhereInput | SaleWhereInput[];
		id?: StringFilter<"Sale"> | string;
		productId?: StringFilter<"Sale"> | string;
		timestamp?: DateTimeFilter<"Sale"> | Date | string;
		quantity?: IntFilter<"Sale"> | number;
		unitPrice?: FloatFilter<"Sale"> | number;
		totalAmount?: FloatFilter<"Sale"> | number;
		product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
	};

	export type SaleOrderByWithRelationInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitPrice?: SortOrder;
		totalAmount?: SortOrder;
		product?: ProductOrderByWithRelationInput;
	};

	export type SaleWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: SaleWhereInput | SaleWhereInput[];
			OR?: SaleWhereInput[];
			NOT?: SaleWhereInput | SaleWhereInput[];
			productId?: StringFilter<"Sale"> | string;
			timestamp?: DateTimeFilter<"Sale"> | Date | string;
			quantity?: IntFilter<"Sale"> | number;
			unitPrice?: FloatFilter<"Sale"> | number;
			totalAmount?: FloatFilter<"Sale"> | number;
			product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
		},
		"id"
	>;

	export type SaleOrderByWithAggregationInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitPrice?: SortOrder;
		totalAmount?: SortOrder;
		_count?: SaleCountOrderByAggregateInput;
		_avg?: SaleAvgOrderByAggregateInput;
		_max?: SaleMaxOrderByAggregateInput;
		_min?: SaleMinOrderByAggregateInput;
		_sum?: SaleSumOrderByAggregateInput;
	};

	export type SaleScalarWhereWithAggregatesInput = {
		AND?:
			| SaleScalarWhereWithAggregatesInput
			| SaleScalarWhereWithAggregatesInput[];
		OR?: SaleScalarWhereWithAggregatesInput[];
		NOT?:
			| SaleScalarWhereWithAggregatesInput
			| SaleScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"Sale"> | string;
		productId?: StringWithAggregatesFilter<"Sale"> | string;
		timestamp?: DateTimeWithAggregatesFilter<"Sale"> | Date | string;
		quantity?: IntWithAggregatesFilter<"Sale"> | number;
		unitPrice?: FloatWithAggregatesFilter<"Sale"> | number;
		totalAmount?: FloatWithAggregatesFilter<"Sale"> | number;
	};

	export type PurchaseWhereInput = {
		AND?: PurchaseWhereInput | PurchaseWhereInput[];
		OR?: PurchaseWhereInput[];
		NOT?: PurchaseWhereInput | PurchaseWhereInput[];
		id?: StringFilter<"Purchase"> | string;
		productId?: StringFilter<"Purchase"> | string;
		timestamp?: DateTimeFilter<"Purchase"> | Date | string;
		quantity?: IntFilter<"Purchase"> | number;
		unitCost?: FloatFilter<"Purchase"> | number;
		totalCost?: FloatFilter<"Purchase"> | number;
		product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
	};

	export type PurchaseOrderByWithRelationInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitCost?: SortOrder;
		totalCost?: SortOrder;
		product?: ProductOrderByWithRelationInput;
	};

	export type PurchaseWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: PurchaseWhereInput | PurchaseWhereInput[];
			OR?: PurchaseWhereInput[];
			NOT?: PurchaseWhereInput | PurchaseWhereInput[];
			productId?: StringFilter<"Purchase"> | string;
			timestamp?: DateTimeFilter<"Purchase"> | Date | string;
			quantity?: IntFilter<"Purchase"> | number;
			unitCost?: FloatFilter<"Purchase"> | number;
			totalCost?: FloatFilter<"Purchase"> | number;
			product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
		},
		"id"
	>;

	export type PurchaseOrderByWithAggregationInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitCost?: SortOrder;
		totalCost?: SortOrder;
		_count?: PurchaseCountOrderByAggregateInput;
		_avg?: PurchaseAvgOrderByAggregateInput;
		_max?: PurchaseMaxOrderByAggregateInput;
		_min?: PurchaseMinOrderByAggregateInput;
		_sum?: PurchaseSumOrderByAggregateInput;
	};

	export type PurchaseScalarWhereWithAggregatesInput = {
		AND?:
			| PurchaseScalarWhereWithAggregatesInput
			| PurchaseScalarWhereWithAggregatesInput[];
		OR?: PurchaseScalarWhereWithAggregatesInput[];
		NOT?:
			| PurchaseScalarWhereWithAggregatesInput
			| PurchaseScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"Purchase"> | string;
		productId?: StringWithAggregatesFilter<"Purchase"> | string;
		timestamp?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string;
		quantity?: IntWithAggregatesFilter<"Purchase"> | number;
		unitCost?: FloatWithAggregatesFilter<"Purchase"> | number;
		totalCost?: FloatWithAggregatesFilter<"Purchase"> | number;
	};

	export type ExpenseWhereInput = {
		AND?: ExpenseWhereInput | ExpenseWhereInput[];
		OR?: ExpenseWhereInput[];
		NOT?: ExpenseWhereInput | ExpenseWhereInput[];
		id?: StringFilter<"Expense"> | string;
		category?: StringFilter<"Expense"> | string;
		amount?: FloatFilter<"Expense"> | number;
		timestamp?: DateTimeFilter<"Expense"> | Date | string;
	};

	export type ExpenseOrderByWithRelationInput = {
		id?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		timestamp?: SortOrder;
	};

	export type ExpenseWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: ExpenseWhereInput | ExpenseWhereInput[];
			OR?: ExpenseWhereInput[];
			NOT?: ExpenseWhereInput | ExpenseWhereInput[];
			category?: StringFilter<"Expense"> | string;
			amount?: FloatFilter<"Expense"> | number;
			timestamp?: DateTimeFilter<"Expense"> | Date | string;
		},
		"id"
	>;

	export type ExpenseOrderByWithAggregationInput = {
		id?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		timestamp?: SortOrder;
		_count?: ExpenseCountOrderByAggregateInput;
		_avg?: ExpenseAvgOrderByAggregateInput;
		_max?: ExpenseMaxOrderByAggregateInput;
		_min?: ExpenseMinOrderByAggregateInput;
		_sum?: ExpenseSumOrderByAggregateInput;
	};

	export type ExpenseScalarWhereWithAggregatesInput = {
		AND?:
			| ExpenseScalarWhereWithAggregatesInput
			| ExpenseScalarWhereWithAggregatesInput[];
		OR?: ExpenseScalarWhereWithAggregatesInput[];
		NOT?:
			| ExpenseScalarWhereWithAggregatesInput
			| ExpenseScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"Expense"> | string;
		category?: StringWithAggregatesFilter<"Expense"> | string;
		amount?: FloatWithAggregatesFilter<"Expense"> | number;
		timestamp?: DateTimeWithAggregatesFilter<"Expense"> | Date | string;
	};

	export type SalesSummaryWhereInput = {
		AND?: SalesSummaryWhereInput | SalesSummaryWhereInput[];
		OR?: SalesSummaryWhereInput[];
		NOT?: SalesSummaryWhereInput | SalesSummaryWhereInput[];
		id?: StringFilter<"SalesSummary"> | string;
		totalValue?: FloatFilter<"SalesSummary"> | number;
		changePercentage?: FloatNullableFilter<"SalesSummary"> | number | null;
		date?: DateTimeFilter<"SalesSummary"> | Date | string;
	};

	export type SalesSummaryOrderByWithRelationInput = {
		id?: SortOrder;
		totalValue?: SortOrder;
		changePercentage?: SortOrderInput | SortOrder;
		date?: SortOrder;
	};

	export type SalesSummaryWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: SalesSummaryWhereInput | SalesSummaryWhereInput[];
			OR?: SalesSummaryWhereInput[];
			NOT?: SalesSummaryWhereInput | SalesSummaryWhereInput[];
			totalValue?: FloatFilter<"SalesSummary"> | number;
			changePercentage?: FloatNullableFilter<"SalesSummary"> | number | null;
			date?: DateTimeFilter<"SalesSummary"> | Date | string;
		},
		"id"
	>;

	export type SalesSummaryOrderByWithAggregationInput = {
		id?: SortOrder;
		totalValue?: SortOrder;
		changePercentage?: SortOrderInput | SortOrder;
		date?: SortOrder;
		_count?: SalesSummaryCountOrderByAggregateInput;
		_avg?: SalesSummaryAvgOrderByAggregateInput;
		_max?: SalesSummaryMaxOrderByAggregateInput;
		_min?: SalesSummaryMinOrderByAggregateInput;
		_sum?: SalesSummarySumOrderByAggregateInput;
	};

	export type SalesSummaryScalarWhereWithAggregatesInput = {
		AND?:
			| SalesSummaryScalarWhereWithAggregatesInput
			| SalesSummaryScalarWhereWithAggregatesInput[];
		OR?: SalesSummaryScalarWhereWithAggregatesInput[];
		NOT?:
			| SalesSummaryScalarWhereWithAggregatesInput
			| SalesSummaryScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"SalesSummary"> | string;
		totalValue?: FloatWithAggregatesFilter<"SalesSummary"> | number;
		changePercentage?:
			| FloatNullableWithAggregatesFilter<"SalesSummary">
			| number
			| null;
		date?: DateTimeWithAggregatesFilter<"SalesSummary"> | Date | string;
	};

	export type PurchaseSummaryWhereInput = {
		AND?: PurchaseSummaryWhereInput | PurchaseSummaryWhereInput[];
		OR?: PurchaseSummaryWhereInput[];
		NOT?: PurchaseSummaryWhereInput | PurchaseSummaryWhereInput[];
		id?: StringFilter<"PurchaseSummary"> | string;
		totalPurchased?: FloatFilter<"PurchaseSummary"> | number;
		changePercentage?: FloatNullableFilter<"PurchaseSummary"> | number | null;
		date?: DateTimeFilter<"PurchaseSummary"> | Date | string;
	};

	export type PurchaseSummaryOrderByWithRelationInput = {
		id?: SortOrder;
		totalPurchased?: SortOrder;
		changePercentage?: SortOrderInput | SortOrder;
		date?: SortOrder;
	};

	export type PurchaseSummaryWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: PurchaseSummaryWhereInput | PurchaseSummaryWhereInput[];
			OR?: PurchaseSummaryWhereInput[];
			NOT?: PurchaseSummaryWhereInput | PurchaseSummaryWhereInput[];
			totalPurchased?: FloatFilter<"PurchaseSummary"> | number;
			changePercentage?: FloatNullableFilter<"PurchaseSummary"> | number | null;
			date?: DateTimeFilter<"PurchaseSummary"> | Date | string;
		},
		"id"
	>;

	export type PurchaseSummaryOrderByWithAggregationInput = {
		id?: SortOrder;
		totalPurchased?: SortOrder;
		changePercentage?: SortOrderInput | SortOrder;
		date?: SortOrder;
		_count?: PurchaseSummaryCountOrderByAggregateInput;
		_avg?: PurchaseSummaryAvgOrderByAggregateInput;
		_max?: PurchaseSummaryMaxOrderByAggregateInput;
		_min?: PurchaseSummaryMinOrderByAggregateInput;
		_sum?: PurchaseSummarySumOrderByAggregateInput;
	};

	export type PurchaseSummaryScalarWhereWithAggregatesInput = {
		AND?:
			| PurchaseSummaryScalarWhereWithAggregatesInput
			| PurchaseSummaryScalarWhereWithAggregatesInput[];
		OR?: PurchaseSummaryScalarWhereWithAggregatesInput[];
		NOT?:
			| PurchaseSummaryScalarWhereWithAggregatesInput
			| PurchaseSummaryScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"PurchaseSummary"> | string;
		totalPurchased?: FloatWithAggregatesFilter<"PurchaseSummary"> | number;
		changePercentage?:
			| FloatNullableWithAggregatesFilter<"PurchaseSummary">
			| number
			| null;
		date?: DateTimeWithAggregatesFilter<"PurchaseSummary"> | Date | string;
	};

	export type ExpenseSummaryWhereInput = {
		AND?: ExpenseSummaryWhereInput | ExpenseSummaryWhereInput[];
		OR?: ExpenseSummaryWhereInput[];
		NOT?: ExpenseSummaryWhereInput | ExpenseSummaryWhereInput[];
		id?: StringFilter<"ExpenseSummary"> | string;
		totalExpenses?: FloatFilter<"ExpenseSummary"> | number;
		date?: DateTimeFilter<"ExpenseSummary"> | Date | string;
		ExpenseByCategory?: ExpenseByCategoryListRelationFilter;
	};

	export type ExpenseSummaryOrderByWithRelationInput = {
		id?: SortOrder;
		totalExpenses?: SortOrder;
		date?: SortOrder;
		ExpenseByCategory?: ExpenseByCategoryOrderByRelationAggregateInput;
	};

	export type ExpenseSummaryWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: ExpenseSummaryWhereInput | ExpenseSummaryWhereInput[];
			OR?: ExpenseSummaryWhereInput[];
			NOT?: ExpenseSummaryWhereInput | ExpenseSummaryWhereInput[];
			totalExpenses?: FloatFilter<"ExpenseSummary"> | number;
			date?: DateTimeFilter<"ExpenseSummary"> | Date | string;
			ExpenseByCategory?: ExpenseByCategoryListRelationFilter;
		},
		"id"
	>;

	export type ExpenseSummaryOrderByWithAggregationInput = {
		id?: SortOrder;
		totalExpenses?: SortOrder;
		date?: SortOrder;
		_count?: ExpenseSummaryCountOrderByAggregateInput;
		_avg?: ExpenseSummaryAvgOrderByAggregateInput;
		_max?: ExpenseSummaryMaxOrderByAggregateInput;
		_min?: ExpenseSummaryMinOrderByAggregateInput;
		_sum?: ExpenseSummarySumOrderByAggregateInput;
	};

	export type ExpenseSummaryScalarWhereWithAggregatesInput = {
		AND?:
			| ExpenseSummaryScalarWhereWithAggregatesInput
			| ExpenseSummaryScalarWhereWithAggregatesInput[];
		OR?: ExpenseSummaryScalarWhereWithAggregatesInput[];
		NOT?:
			| ExpenseSummaryScalarWhereWithAggregatesInput
			| ExpenseSummaryScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"ExpenseSummary"> | string;
		totalExpenses?: FloatWithAggregatesFilter<"ExpenseSummary"> | number;
		date?: DateTimeWithAggregatesFilter<"ExpenseSummary"> | Date | string;
	};

	export type ExpenseByCategoryWhereInput = {
		AND?: ExpenseByCategoryWhereInput | ExpenseByCategoryWhereInput[];
		OR?: ExpenseByCategoryWhereInput[];
		NOT?: ExpenseByCategoryWhereInput | ExpenseByCategoryWhereInput[];
		id?: StringFilter<"ExpenseByCategory"> | string;
		expenseSummaryId?: StringFilter<"ExpenseByCategory"> | string;
		category?: StringFilter<"ExpenseByCategory"> | string;
		amount?: BigIntFilter<"ExpenseByCategory"> | bigint | number;
		date?: DateTimeFilter<"ExpenseByCategory"> | Date | string;
		expenseSummary?: XOR<
			ExpenseSummaryScalarRelationFilter,
			ExpenseSummaryWhereInput
		>;
	};

	export type ExpenseByCategoryOrderByWithRelationInput = {
		id?: SortOrder;
		expenseSummaryId?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		date?: SortOrder;
		expenseSummary?: ExpenseSummaryOrderByWithRelationInput;
	};

	export type ExpenseByCategoryWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: ExpenseByCategoryWhereInput | ExpenseByCategoryWhereInput[];
			OR?: ExpenseByCategoryWhereInput[];
			NOT?: ExpenseByCategoryWhereInput | ExpenseByCategoryWhereInput[];
			expenseSummaryId?: StringFilter<"ExpenseByCategory"> | string;
			category?: StringFilter<"ExpenseByCategory"> | string;
			amount?: BigIntFilter<"ExpenseByCategory"> | bigint | number;
			date?: DateTimeFilter<"ExpenseByCategory"> | Date | string;
			expenseSummary?: XOR<
				ExpenseSummaryScalarRelationFilter,
				ExpenseSummaryWhereInput
			>;
		},
		"id"
	>;

	export type ExpenseByCategoryOrderByWithAggregationInput = {
		id?: SortOrder;
		expenseSummaryId?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		date?: SortOrder;
		_count?: ExpenseByCategoryCountOrderByAggregateInput;
		_avg?: ExpenseByCategoryAvgOrderByAggregateInput;
		_max?: ExpenseByCategoryMaxOrderByAggregateInput;
		_min?: ExpenseByCategoryMinOrderByAggregateInput;
		_sum?: ExpenseByCategorySumOrderByAggregateInput;
	};

	export type ExpenseByCategoryScalarWhereWithAggregatesInput = {
		AND?:
			| ExpenseByCategoryScalarWhereWithAggregatesInput
			| ExpenseByCategoryScalarWhereWithAggregatesInput[];
		OR?: ExpenseByCategoryScalarWhereWithAggregatesInput[];
		NOT?:
			| ExpenseByCategoryScalarWhereWithAggregatesInput
			| ExpenseByCategoryScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"ExpenseByCategory"> | string;
		expenseSummaryId?: StringWithAggregatesFilter<"ExpenseByCategory"> | string;
		category?: StringWithAggregatesFilter<"ExpenseByCategory"> | string;
		amount?: BigIntWithAggregatesFilter<"ExpenseByCategory"> | bigint | number;
		date?: DateTimeWithAggregatesFilter<"ExpenseByCategory"> | Date | string;
	};

	export type UserCreateInput = {
		id?: string;
		name: string;
		email: string;
	};

	export type UserUncheckedCreateInput = {
		id?: string;
		name: string;
		email: string;
	};

	export type UserUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
	};

	export type UserUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
	};

	export type UserCreateManyInput = {
		id?: string;
		name: string;
		email: string;
	};

	export type UserUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
	};

	export type UserUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
	};

	export type ProductCreateInput = {
		id?: string;
		name: string;
		price: number;
		rating?: number | null;
		stockQuantity: number;
		Sales?: SaleCreateNestedManyWithoutProductInput;
		Purchases?: PurchaseCreateNestedManyWithoutProductInput;
	};

	export type ProductUncheckedCreateInput = {
		id?: string;
		name: string;
		price: number;
		rating?: number | null;
		stockQuantity: number;
		Sales?: SaleUncheckedCreateNestedManyWithoutProductInput;
		Purchases?: PurchaseUncheckedCreateNestedManyWithoutProductInput;
	};

	export type ProductUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		price?: FloatFieldUpdateOperationsInput | number;
		rating?: NullableFloatFieldUpdateOperationsInput | number | null;
		stockQuantity?: IntFieldUpdateOperationsInput | number;
		Sales?: SaleUpdateManyWithoutProductNestedInput;
		Purchases?: PurchaseUpdateManyWithoutProductNestedInput;
	};

	export type ProductUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		price?: FloatFieldUpdateOperationsInput | number;
		rating?: NullableFloatFieldUpdateOperationsInput | number | null;
		stockQuantity?: IntFieldUpdateOperationsInput | number;
		Sales?: SaleUncheckedUpdateManyWithoutProductNestedInput;
		Purchases?: PurchaseUncheckedUpdateManyWithoutProductNestedInput;
	};

	export type ProductCreateManyInput = {
		id?: string;
		name: string;
		price: number;
		rating?: number | null;
		stockQuantity: number;
	};

	export type ProductUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		price?: FloatFieldUpdateOperationsInput | number;
		rating?: NullableFloatFieldUpdateOperationsInput | number | null;
		stockQuantity?: IntFieldUpdateOperationsInput | number;
	};

	export type ProductUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		price?: FloatFieldUpdateOperationsInput | number;
		rating?: NullableFloatFieldUpdateOperationsInput | number | null;
		stockQuantity?: IntFieldUpdateOperationsInput | number;
	};

	export type SaleCreateInput = {
		id?: string;
		timestamp: Date | string;
		quantity: number;
		unitPrice: number;
		totalAmount: number;
		product: ProductCreateNestedOneWithoutSalesInput;
	};

	export type SaleUncheckedCreateInput = {
		id?: string;
		productId: string;
		timestamp: Date | string;
		quantity: number;
		unitPrice: number;
		totalAmount: number;
	};

	export type SaleUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitPrice?: FloatFieldUpdateOperationsInput | number;
		totalAmount?: FloatFieldUpdateOperationsInput | number;
		product?: ProductUpdateOneRequiredWithoutSalesNestedInput;
	};

	export type SaleUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		productId?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitPrice?: FloatFieldUpdateOperationsInput | number;
		totalAmount?: FloatFieldUpdateOperationsInput | number;
	};

	export type SaleCreateManyInput = {
		id?: string;
		productId: string;
		timestamp: Date | string;
		quantity: number;
		unitPrice: number;
		totalAmount: number;
	};

	export type SaleUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitPrice?: FloatFieldUpdateOperationsInput | number;
		totalAmount?: FloatFieldUpdateOperationsInput | number;
	};

	export type SaleUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		productId?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitPrice?: FloatFieldUpdateOperationsInput | number;
		totalAmount?: FloatFieldUpdateOperationsInput | number;
	};

	export type PurchaseCreateInput = {
		id?: string;
		timestamp: Date | string;
		quantity: number;
		unitCost: number;
		totalCost: number;
		product: ProductCreateNestedOneWithoutPurchasesInput;
	};

	export type PurchaseUncheckedCreateInput = {
		id?: string;
		productId: string;
		timestamp: Date | string;
		quantity: number;
		unitCost: number;
		totalCost: number;
	};

	export type PurchaseUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitCost?: FloatFieldUpdateOperationsInput | number;
		totalCost?: FloatFieldUpdateOperationsInput | number;
		product?: ProductUpdateOneRequiredWithoutPurchasesNestedInput;
	};

	export type PurchaseUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		productId?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitCost?: FloatFieldUpdateOperationsInput | number;
		totalCost?: FloatFieldUpdateOperationsInput | number;
	};

	export type PurchaseCreateManyInput = {
		id?: string;
		productId: string;
		timestamp: Date | string;
		quantity: number;
		unitCost: number;
		totalCost: number;
	};

	export type PurchaseUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitCost?: FloatFieldUpdateOperationsInput | number;
		totalCost?: FloatFieldUpdateOperationsInput | number;
	};

	export type PurchaseUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		productId?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitCost?: FloatFieldUpdateOperationsInput | number;
		totalCost?: FloatFieldUpdateOperationsInput | number;
	};

	export type ExpenseCreateInput = {
		id?: string;
		category: string;
		amount: number;
		timestamp: Date | string;
	};

	export type ExpenseUncheckedCreateInput = {
		id?: string;
		category: string;
		amount: number;
		timestamp: Date | string;
	};

	export type ExpenseUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: FloatFieldUpdateOperationsInput | number;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: FloatFieldUpdateOperationsInput | number;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseCreateManyInput = {
		id?: string;
		category: string;
		amount: number;
		timestamp: Date | string;
	};

	export type ExpenseUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: FloatFieldUpdateOperationsInput | number;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: FloatFieldUpdateOperationsInput | number;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type SalesSummaryCreateInput = {
		id?: string;
		totalValue: number;
		changePercentage?: number | null;
		date: Date | string;
	};

	export type SalesSummaryUncheckedCreateInput = {
		id?: string;
		totalValue: number;
		changePercentage?: number | null;
		date: Date | string;
	};

	export type SalesSummaryUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalValue?: FloatFieldUpdateOperationsInput | number;
		changePercentage?: NullableFloatFieldUpdateOperationsInput | number | null;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type SalesSummaryUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalValue?: FloatFieldUpdateOperationsInput | number;
		changePercentage?: NullableFloatFieldUpdateOperationsInput | number | null;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type SalesSummaryCreateManyInput = {
		id?: string;
		totalValue: number;
		changePercentage?: number | null;
		date: Date | string;
	};

	export type SalesSummaryUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalValue?: FloatFieldUpdateOperationsInput | number;
		changePercentage?: NullableFloatFieldUpdateOperationsInput | number | null;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type SalesSummaryUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalValue?: FloatFieldUpdateOperationsInput | number;
		changePercentage?: NullableFloatFieldUpdateOperationsInput | number | null;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PurchaseSummaryCreateInput = {
		id?: string;
		totalPurchased: number;
		changePercentage?: number | null;
		date: Date | string;
	};

	export type PurchaseSummaryUncheckedCreateInput = {
		id?: string;
		totalPurchased: number;
		changePercentage?: number | null;
		date: Date | string;
	};

	export type PurchaseSummaryUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalPurchased?: FloatFieldUpdateOperationsInput | number;
		changePercentage?: NullableFloatFieldUpdateOperationsInput | number | null;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PurchaseSummaryUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalPurchased?: FloatFieldUpdateOperationsInput | number;
		changePercentage?: NullableFloatFieldUpdateOperationsInput | number | null;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PurchaseSummaryCreateManyInput = {
		id?: string;
		totalPurchased: number;
		changePercentage?: number | null;
		date: Date | string;
	};

	export type PurchaseSummaryUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalPurchased?: FloatFieldUpdateOperationsInput | number;
		changePercentage?: NullableFloatFieldUpdateOperationsInput | number | null;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PurchaseSummaryUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalPurchased?: FloatFieldUpdateOperationsInput | number;
		changePercentage?: NullableFloatFieldUpdateOperationsInput | number | null;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseSummaryCreateInput = {
		id?: string;
		totalExpenses: number;
		date: Date | string;
		ExpenseByCategory?: ExpenseByCategoryCreateNestedManyWithoutExpenseSummaryInput;
	};

	export type ExpenseSummaryUncheckedCreateInput = {
		id?: string;
		totalExpenses: number;
		date: Date | string;
		ExpenseByCategory?: ExpenseByCategoryUncheckedCreateNestedManyWithoutExpenseSummaryInput;
	};

	export type ExpenseSummaryUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalExpenses?: FloatFieldUpdateOperationsInput | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		ExpenseByCategory?: ExpenseByCategoryUpdateManyWithoutExpenseSummaryNestedInput;
	};

	export type ExpenseSummaryUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalExpenses?: FloatFieldUpdateOperationsInput | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		ExpenseByCategory?: ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryNestedInput;
	};

	export type ExpenseSummaryCreateManyInput = {
		id?: string;
		totalExpenses: number;
		date: Date | string;
	};

	export type ExpenseSummaryUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalExpenses?: FloatFieldUpdateOperationsInput | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseSummaryUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalExpenses?: FloatFieldUpdateOperationsInput | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseByCategoryCreateInput = {
		id?: string;
		category: string;
		amount: bigint | number;
		date: Date | string;
		expenseSummary: ExpenseSummaryCreateNestedOneWithoutExpenseByCategoryInput;
	};

	export type ExpenseByCategoryUncheckedCreateInput = {
		id?: string;
		expenseSummaryId: string;
		category: string;
		amount: bigint | number;
		date: Date | string;
	};

	export type ExpenseByCategoryUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: BigIntFieldUpdateOperationsInput | bigint | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		expenseSummary?: ExpenseSummaryUpdateOneRequiredWithoutExpenseByCategoryNestedInput;
	};

	export type ExpenseByCategoryUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		expenseSummaryId?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: BigIntFieldUpdateOperationsInput | bigint | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseByCategoryCreateManyInput = {
		id?: string;
		expenseSummaryId: string;
		category: string;
		amount: bigint | number;
		date: Date | string;
	};

	export type ExpenseByCategoryUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: BigIntFieldUpdateOperationsInput | bigint | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseByCategoryUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		expenseSummaryId?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: BigIntFieldUpdateOperationsInput | bigint | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
	};

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
	};

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
	};

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type FloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	export type FloatNullableFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
	};

	export type IntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type SaleListRelationFilter = {
		every?: SaleWhereInput;
		some?: SaleWhereInput;
		none?: SaleWhereInput;
	};

	export type PurchaseListRelationFilter = {
		every?: PurchaseWhereInput;
		some?: PurchaseWhereInput;
		none?: PurchaseWhereInput;
	};

	export type SortOrderInput = {
		sort: SortOrder;
		nulls?: NullsOrder;
	};

	export type SaleOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type PurchaseOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type ProductCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		rating?: SortOrder;
		stockQuantity?: SortOrder;
	};

	export type ProductAvgOrderByAggregateInput = {
		price?: SortOrder;
		rating?: SortOrder;
		stockQuantity?: SortOrder;
	};

	export type ProductMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		rating?: SortOrder;
		stockQuantity?: SortOrder;
	};

	export type ProductMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		rating?: SortOrder;
		stockQuantity?: SortOrder;
	};

	export type ProductSumOrderByAggregateInput = {
		price?: SortOrder;
		rating?: SortOrder;
		stockQuantity?: SortOrder;
	};

	export type FloatWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedFloatFilter<$PrismaModel>;
		_min?: NestedFloatFilter<$PrismaModel>;
		_max?: NestedFloatFilter<$PrismaModel>;
	};

	export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_avg?: NestedFloatNullableFilter<$PrismaModel>;
		_sum?: NestedFloatNullableFilter<$PrismaModel>;
		_min?: NestedFloatNullableFilter<$PrismaModel>;
		_max?: NestedFloatNullableFilter<$PrismaModel>;
	};

	export type IntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type DateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type ProductScalarRelationFilter = {
		is?: ProductWhereInput;
		isNot?: ProductWhereInput;
	};

	export type SaleCountOrderByAggregateInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitPrice?: SortOrder;
		totalAmount?: SortOrder;
	};

	export type SaleAvgOrderByAggregateInput = {
		quantity?: SortOrder;
		unitPrice?: SortOrder;
		totalAmount?: SortOrder;
	};

	export type SaleMaxOrderByAggregateInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitPrice?: SortOrder;
		totalAmount?: SortOrder;
	};

	export type SaleMinOrderByAggregateInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitPrice?: SortOrder;
		totalAmount?: SortOrder;
	};

	export type SaleSumOrderByAggregateInput = {
		quantity?: SortOrder;
		unitPrice?: SortOrder;
		totalAmount?: SortOrder;
	};

	export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type PurchaseCountOrderByAggregateInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitCost?: SortOrder;
		totalCost?: SortOrder;
	};

	export type PurchaseAvgOrderByAggregateInput = {
		quantity?: SortOrder;
		unitCost?: SortOrder;
		totalCost?: SortOrder;
	};

	export type PurchaseMaxOrderByAggregateInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitCost?: SortOrder;
		totalCost?: SortOrder;
	};

	export type PurchaseMinOrderByAggregateInput = {
		id?: SortOrder;
		productId?: SortOrder;
		timestamp?: SortOrder;
		quantity?: SortOrder;
		unitCost?: SortOrder;
		totalCost?: SortOrder;
	};

	export type PurchaseSumOrderByAggregateInput = {
		quantity?: SortOrder;
		unitCost?: SortOrder;
		totalCost?: SortOrder;
	};

	export type ExpenseCountOrderByAggregateInput = {
		id?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		timestamp?: SortOrder;
	};

	export type ExpenseAvgOrderByAggregateInput = {
		amount?: SortOrder;
	};

	export type ExpenseMaxOrderByAggregateInput = {
		id?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		timestamp?: SortOrder;
	};

	export type ExpenseMinOrderByAggregateInput = {
		id?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		timestamp?: SortOrder;
	};

	export type ExpenseSumOrderByAggregateInput = {
		amount?: SortOrder;
	};

	export type SalesSummaryCountOrderByAggregateInput = {
		id?: SortOrder;
		totalValue?: SortOrder;
		changePercentage?: SortOrder;
		date?: SortOrder;
	};

	export type SalesSummaryAvgOrderByAggregateInput = {
		totalValue?: SortOrder;
		changePercentage?: SortOrder;
	};

	export type SalesSummaryMaxOrderByAggregateInput = {
		id?: SortOrder;
		totalValue?: SortOrder;
		changePercentage?: SortOrder;
		date?: SortOrder;
	};

	export type SalesSummaryMinOrderByAggregateInput = {
		id?: SortOrder;
		totalValue?: SortOrder;
		changePercentage?: SortOrder;
		date?: SortOrder;
	};

	export type SalesSummarySumOrderByAggregateInput = {
		totalValue?: SortOrder;
		changePercentage?: SortOrder;
	};

	export type PurchaseSummaryCountOrderByAggregateInput = {
		id?: SortOrder;
		totalPurchased?: SortOrder;
		changePercentage?: SortOrder;
		date?: SortOrder;
	};

	export type PurchaseSummaryAvgOrderByAggregateInput = {
		totalPurchased?: SortOrder;
		changePercentage?: SortOrder;
	};

	export type PurchaseSummaryMaxOrderByAggregateInput = {
		id?: SortOrder;
		totalPurchased?: SortOrder;
		changePercentage?: SortOrder;
		date?: SortOrder;
	};

	export type PurchaseSummaryMinOrderByAggregateInput = {
		id?: SortOrder;
		totalPurchased?: SortOrder;
		changePercentage?: SortOrder;
		date?: SortOrder;
	};

	export type PurchaseSummarySumOrderByAggregateInput = {
		totalPurchased?: SortOrder;
		changePercentage?: SortOrder;
	};

	export type ExpenseByCategoryListRelationFilter = {
		every?: ExpenseByCategoryWhereInput;
		some?: ExpenseByCategoryWhereInput;
		none?: ExpenseByCategoryWhereInput;
	};

	export type ExpenseByCategoryOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type ExpenseSummaryCountOrderByAggregateInput = {
		id?: SortOrder;
		totalExpenses?: SortOrder;
		date?: SortOrder;
	};

	export type ExpenseSummaryAvgOrderByAggregateInput = {
		totalExpenses?: SortOrder;
	};

	export type ExpenseSummaryMaxOrderByAggregateInput = {
		id?: SortOrder;
		totalExpenses?: SortOrder;
		date?: SortOrder;
	};

	export type ExpenseSummaryMinOrderByAggregateInput = {
		id?: SortOrder;
		totalExpenses?: SortOrder;
		date?: SortOrder;
	};

	export type ExpenseSummarySumOrderByAggregateInput = {
		totalExpenses?: SortOrder;
	};

	export type BigIntFilter<$PrismaModel = never> = {
		equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
		notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
		lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
	};

	export type ExpenseSummaryScalarRelationFilter = {
		is?: ExpenseSummaryWhereInput;
		isNot?: ExpenseSummaryWhereInput;
	};

	export type ExpenseByCategoryCountOrderByAggregateInput = {
		id?: SortOrder;
		expenseSummaryId?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		date?: SortOrder;
	};

	export type ExpenseByCategoryAvgOrderByAggregateInput = {
		amount?: SortOrder;
	};

	export type ExpenseByCategoryMaxOrderByAggregateInput = {
		id?: SortOrder;
		expenseSummaryId?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		date?: SortOrder;
	};

	export type ExpenseByCategoryMinOrderByAggregateInput = {
		id?: SortOrder;
		expenseSummaryId?: SortOrder;
		category?: SortOrder;
		amount?: SortOrder;
		date?: SortOrder;
	};

	export type ExpenseByCategorySumOrderByAggregateInput = {
		amount?: SortOrder;
	};

	export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
		notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
		lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedBigIntFilter<$PrismaModel>;
		_min?: NestedBigIntFilter<$PrismaModel>;
		_max?: NestedBigIntFilter<$PrismaModel>;
	};

	export type StringFieldUpdateOperationsInput = {
		set?: string;
	};

	export type SaleCreateNestedManyWithoutProductInput = {
		create?:
			| XOR<
					SaleCreateWithoutProductInput,
					SaleUncheckedCreateWithoutProductInput
			  >
			| SaleCreateWithoutProductInput[]
			| SaleUncheckedCreateWithoutProductInput[];
		connectOrCreate?:
			| SaleCreateOrConnectWithoutProductInput
			| SaleCreateOrConnectWithoutProductInput[];
		createMany?: SaleCreateManyProductInputEnvelope;
		connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
	};

	export type PurchaseCreateNestedManyWithoutProductInput = {
		create?:
			| XOR<
					PurchaseCreateWithoutProductInput,
					PurchaseUncheckedCreateWithoutProductInput
			  >
			| PurchaseCreateWithoutProductInput[]
			| PurchaseUncheckedCreateWithoutProductInput[];
		connectOrCreate?:
			| PurchaseCreateOrConnectWithoutProductInput
			| PurchaseCreateOrConnectWithoutProductInput[];
		createMany?: PurchaseCreateManyProductInputEnvelope;
		connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
	};

	export type SaleUncheckedCreateNestedManyWithoutProductInput = {
		create?:
			| XOR<
					SaleCreateWithoutProductInput,
					SaleUncheckedCreateWithoutProductInput
			  >
			| SaleCreateWithoutProductInput[]
			| SaleUncheckedCreateWithoutProductInput[];
		connectOrCreate?:
			| SaleCreateOrConnectWithoutProductInput
			| SaleCreateOrConnectWithoutProductInput[];
		createMany?: SaleCreateManyProductInputEnvelope;
		connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
	};

	export type PurchaseUncheckedCreateNestedManyWithoutProductInput = {
		create?:
			| XOR<
					PurchaseCreateWithoutProductInput,
					PurchaseUncheckedCreateWithoutProductInput
			  >
			| PurchaseCreateWithoutProductInput[]
			| PurchaseUncheckedCreateWithoutProductInput[];
		connectOrCreate?:
			| PurchaseCreateOrConnectWithoutProductInput
			| PurchaseCreateOrConnectWithoutProductInput[];
		createMany?: PurchaseCreateManyProductInputEnvelope;
		connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
	};

	export type FloatFieldUpdateOperationsInput = {
		set?: number;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type NullableFloatFieldUpdateOperationsInput = {
		set?: number | null;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type IntFieldUpdateOperationsInput = {
		set?: number;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type SaleUpdateManyWithoutProductNestedInput = {
		create?:
			| XOR<
					SaleCreateWithoutProductInput,
					SaleUncheckedCreateWithoutProductInput
			  >
			| SaleCreateWithoutProductInput[]
			| SaleUncheckedCreateWithoutProductInput[];
		connectOrCreate?:
			| SaleCreateOrConnectWithoutProductInput
			| SaleCreateOrConnectWithoutProductInput[];
		upsert?:
			| SaleUpsertWithWhereUniqueWithoutProductInput
			| SaleUpsertWithWhereUniqueWithoutProductInput[];
		createMany?: SaleCreateManyProductInputEnvelope;
		set?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
		disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
		delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
		connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
		update?:
			| SaleUpdateWithWhereUniqueWithoutProductInput
			| SaleUpdateWithWhereUniqueWithoutProductInput[];
		updateMany?:
			| SaleUpdateManyWithWhereWithoutProductInput
			| SaleUpdateManyWithWhereWithoutProductInput[];
		deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[];
	};

	export type PurchaseUpdateManyWithoutProductNestedInput = {
		create?:
			| XOR<
					PurchaseCreateWithoutProductInput,
					PurchaseUncheckedCreateWithoutProductInput
			  >
			| PurchaseCreateWithoutProductInput[]
			| PurchaseUncheckedCreateWithoutProductInput[];
		connectOrCreate?:
			| PurchaseCreateOrConnectWithoutProductInput
			| PurchaseCreateOrConnectWithoutProductInput[];
		upsert?:
			| PurchaseUpsertWithWhereUniqueWithoutProductInput
			| PurchaseUpsertWithWhereUniqueWithoutProductInput[];
		createMany?: PurchaseCreateManyProductInputEnvelope;
		set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
		disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
		delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
		connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
		update?:
			| PurchaseUpdateWithWhereUniqueWithoutProductInput
			| PurchaseUpdateWithWhereUniqueWithoutProductInput[];
		updateMany?:
			| PurchaseUpdateManyWithWhereWithoutProductInput
			| PurchaseUpdateManyWithWhereWithoutProductInput[];
		deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[];
	};

	export type SaleUncheckedUpdateManyWithoutProductNestedInput = {
		create?:
			| XOR<
					SaleCreateWithoutProductInput,
					SaleUncheckedCreateWithoutProductInput
			  >
			| SaleCreateWithoutProductInput[]
			| SaleUncheckedCreateWithoutProductInput[];
		connectOrCreate?:
			| SaleCreateOrConnectWithoutProductInput
			| SaleCreateOrConnectWithoutProductInput[];
		upsert?:
			| SaleUpsertWithWhereUniqueWithoutProductInput
			| SaleUpsertWithWhereUniqueWithoutProductInput[];
		createMany?: SaleCreateManyProductInputEnvelope;
		set?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
		disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
		delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
		connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[];
		update?:
			| SaleUpdateWithWhereUniqueWithoutProductInput
			| SaleUpdateWithWhereUniqueWithoutProductInput[];
		updateMany?:
			| SaleUpdateManyWithWhereWithoutProductInput
			| SaleUpdateManyWithWhereWithoutProductInput[];
		deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[];
	};

	export type PurchaseUncheckedUpdateManyWithoutProductNestedInput = {
		create?:
			| XOR<
					PurchaseCreateWithoutProductInput,
					PurchaseUncheckedCreateWithoutProductInput
			  >
			| PurchaseCreateWithoutProductInput[]
			| PurchaseUncheckedCreateWithoutProductInput[];
		connectOrCreate?:
			| PurchaseCreateOrConnectWithoutProductInput
			| PurchaseCreateOrConnectWithoutProductInput[];
		upsert?:
			| PurchaseUpsertWithWhereUniqueWithoutProductInput
			| PurchaseUpsertWithWhereUniqueWithoutProductInput[];
		createMany?: PurchaseCreateManyProductInputEnvelope;
		set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
		disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
		delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
		connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[];
		update?:
			| PurchaseUpdateWithWhereUniqueWithoutProductInput
			| PurchaseUpdateWithWhereUniqueWithoutProductInput[];
		updateMany?:
			| PurchaseUpdateManyWithWhereWithoutProductInput
			| PurchaseUpdateManyWithWhereWithoutProductInput[];
		deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[];
	};

	export type ProductCreateNestedOneWithoutSalesInput = {
		create?: XOR<
			ProductCreateWithoutSalesInput,
			ProductUncheckedCreateWithoutSalesInput
		>;
		connectOrCreate?: ProductCreateOrConnectWithoutSalesInput;
		connect?: ProductWhereUniqueInput;
	};

	export type DateTimeFieldUpdateOperationsInput = {
		set?: Date | string;
	};

	export type ProductUpdateOneRequiredWithoutSalesNestedInput = {
		create?: XOR<
			ProductCreateWithoutSalesInput,
			ProductUncheckedCreateWithoutSalesInput
		>;
		connectOrCreate?: ProductCreateOrConnectWithoutSalesInput;
		upsert?: ProductUpsertWithoutSalesInput;
		connect?: ProductWhereUniqueInput;
		update?: XOR<
			XOR<
				ProductUpdateToOneWithWhereWithoutSalesInput,
				ProductUpdateWithoutSalesInput
			>,
			ProductUncheckedUpdateWithoutSalesInput
		>;
	};

	export type ProductCreateNestedOneWithoutPurchasesInput = {
		create?: XOR<
			ProductCreateWithoutPurchasesInput,
			ProductUncheckedCreateWithoutPurchasesInput
		>;
		connectOrCreate?: ProductCreateOrConnectWithoutPurchasesInput;
		connect?: ProductWhereUniqueInput;
	};

	export type ProductUpdateOneRequiredWithoutPurchasesNestedInput = {
		create?: XOR<
			ProductCreateWithoutPurchasesInput,
			ProductUncheckedCreateWithoutPurchasesInput
		>;
		connectOrCreate?: ProductCreateOrConnectWithoutPurchasesInput;
		upsert?: ProductUpsertWithoutPurchasesInput;
		connect?: ProductWhereUniqueInput;
		update?: XOR<
			XOR<
				ProductUpdateToOneWithWhereWithoutPurchasesInput,
				ProductUpdateWithoutPurchasesInput
			>,
			ProductUncheckedUpdateWithoutPurchasesInput
		>;
	};

	export type ExpenseByCategoryCreateNestedManyWithoutExpenseSummaryInput = {
		create?:
			| XOR<
					ExpenseByCategoryCreateWithoutExpenseSummaryInput,
					ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput
			  >
			| ExpenseByCategoryCreateWithoutExpenseSummaryInput[]
			| ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[];
		connectOrCreate?:
			| ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput
			| ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[];
		createMany?: ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope;
		connect?:
			| ExpenseByCategoryWhereUniqueInput
			| ExpenseByCategoryWhereUniqueInput[];
	};

	export type ExpenseByCategoryUncheckedCreateNestedManyWithoutExpenseSummaryInput =
		{
			create?:
				| XOR<
						ExpenseByCategoryCreateWithoutExpenseSummaryInput,
						ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput
				  >
				| ExpenseByCategoryCreateWithoutExpenseSummaryInput[]
				| ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[];
			connectOrCreate?:
				| ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput
				| ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[];
			createMany?: ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope;
			connect?:
				| ExpenseByCategoryWhereUniqueInput
				| ExpenseByCategoryWhereUniqueInput[];
		};

	export type ExpenseByCategoryUpdateManyWithoutExpenseSummaryNestedInput = {
		create?:
			| XOR<
					ExpenseByCategoryCreateWithoutExpenseSummaryInput,
					ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput
			  >
			| ExpenseByCategoryCreateWithoutExpenseSummaryInput[]
			| ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[];
		connectOrCreate?:
			| ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput
			| ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[];
		upsert?:
			| ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput
			| ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput[];
		createMany?: ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope;
		set?:
			| ExpenseByCategoryWhereUniqueInput
			| ExpenseByCategoryWhereUniqueInput[];
		disconnect?:
			| ExpenseByCategoryWhereUniqueInput
			| ExpenseByCategoryWhereUniqueInput[];
		delete?:
			| ExpenseByCategoryWhereUniqueInput
			| ExpenseByCategoryWhereUniqueInput[];
		connect?:
			| ExpenseByCategoryWhereUniqueInput
			| ExpenseByCategoryWhereUniqueInput[];
		update?:
			| ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput
			| ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput[];
		updateMany?:
			| ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput
			| ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput[];
		deleteMany?:
			| ExpenseByCategoryScalarWhereInput
			| ExpenseByCategoryScalarWhereInput[];
	};

	export type ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryNestedInput =
		{
			create?:
				| XOR<
						ExpenseByCategoryCreateWithoutExpenseSummaryInput,
						ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput
				  >
				| ExpenseByCategoryCreateWithoutExpenseSummaryInput[]
				| ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[];
			connectOrCreate?:
				| ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput
				| ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[];
			upsert?:
				| ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput
				| ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput[];
			createMany?: ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope;
			set?:
				| ExpenseByCategoryWhereUniqueInput
				| ExpenseByCategoryWhereUniqueInput[];
			disconnect?:
				| ExpenseByCategoryWhereUniqueInput
				| ExpenseByCategoryWhereUniqueInput[];
			delete?:
				| ExpenseByCategoryWhereUniqueInput
				| ExpenseByCategoryWhereUniqueInput[];
			connect?:
				| ExpenseByCategoryWhereUniqueInput
				| ExpenseByCategoryWhereUniqueInput[];
			update?:
				| ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput
				| ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput[];
			updateMany?:
				| ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput
				| ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput[];
			deleteMany?:
				| ExpenseByCategoryScalarWhereInput
				| ExpenseByCategoryScalarWhereInput[];
		};

	export type ExpenseSummaryCreateNestedOneWithoutExpenseByCategoryInput = {
		create?: XOR<
			ExpenseSummaryCreateWithoutExpenseByCategoryInput,
			ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput
		>;
		connectOrCreate?: ExpenseSummaryCreateOrConnectWithoutExpenseByCategoryInput;
		connect?: ExpenseSummaryWhereUniqueInput;
	};

	export type BigIntFieldUpdateOperationsInput = {
		set?: bigint | number;
		increment?: bigint | number;
		decrement?: bigint | number;
		multiply?: bigint | number;
		divide?: bigint | number;
	};

	export type ExpenseSummaryUpdateOneRequiredWithoutExpenseByCategoryNestedInput =
		{
			create?: XOR<
				ExpenseSummaryCreateWithoutExpenseByCategoryInput,
				ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput
			>;
			connectOrCreate?: ExpenseSummaryCreateOrConnectWithoutExpenseByCategoryInput;
			upsert?: ExpenseSummaryUpsertWithoutExpenseByCategoryInput;
			connect?: ExpenseSummaryWhereUniqueInput;
			update?: XOR<
				XOR<
					ExpenseSummaryUpdateToOneWithWhereWithoutExpenseByCategoryInput,
					ExpenseSummaryUpdateWithoutExpenseByCategoryInput
				>,
				ExpenseSummaryUncheckedUpdateWithoutExpenseByCategoryInput
			>;
		};

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type NestedIntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type NestedFloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	export type NestedFloatNullableFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
	};

	export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedFloatFilter<$PrismaModel>;
		_min?: NestedFloatFilter<$PrismaModel>;
		_max?: NestedFloatFilter<$PrismaModel>;
	};

	export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_avg?: NestedFloatNullableFilter<$PrismaModel>;
		_sum?: NestedFloatNullableFilter<$PrismaModel>;
		_min?: NestedFloatNullableFilter<$PrismaModel>;
		_max?: NestedFloatNullableFilter<$PrismaModel>;
	};

	export type NestedIntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableFilter<$PrismaModel> | number | null;
	};

	export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type NestedDateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type NestedBigIntFilter<$PrismaModel = never> = {
		equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
		notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
		lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
	};

	export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
		notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
		lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
		not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedBigIntFilter<$PrismaModel>;
		_min?: NestedBigIntFilter<$PrismaModel>;
		_max?: NestedBigIntFilter<$PrismaModel>;
	};

	export type SaleCreateWithoutProductInput = {
		id?: string;
		timestamp: Date | string;
		quantity: number;
		unitPrice: number;
		totalAmount: number;
	};

	export type SaleUncheckedCreateWithoutProductInput = {
		id?: string;
		timestamp: Date | string;
		quantity: number;
		unitPrice: number;
		totalAmount: number;
	};

	export type SaleCreateOrConnectWithoutProductInput = {
		where: SaleWhereUniqueInput;
		create: XOR<
			SaleCreateWithoutProductInput,
			SaleUncheckedCreateWithoutProductInput
		>;
	};

	export type SaleCreateManyProductInputEnvelope = {
		data: SaleCreateManyProductInput | SaleCreateManyProductInput[];
		skipDuplicates?: boolean;
	};

	export type PurchaseCreateWithoutProductInput = {
		id?: string;
		timestamp: Date | string;
		quantity: number;
		unitCost: number;
		totalCost: number;
	};

	export type PurchaseUncheckedCreateWithoutProductInput = {
		id?: string;
		timestamp: Date | string;
		quantity: number;
		unitCost: number;
		totalCost: number;
	};

	export type PurchaseCreateOrConnectWithoutProductInput = {
		where: PurchaseWhereUniqueInput;
		create: XOR<
			PurchaseCreateWithoutProductInput,
			PurchaseUncheckedCreateWithoutProductInput
		>;
	};

	export type PurchaseCreateManyProductInputEnvelope = {
		data: PurchaseCreateManyProductInput | PurchaseCreateManyProductInput[];
		skipDuplicates?: boolean;
	};

	export type SaleUpsertWithWhereUniqueWithoutProductInput = {
		where: SaleWhereUniqueInput;
		update: XOR<
			SaleUpdateWithoutProductInput,
			SaleUncheckedUpdateWithoutProductInput
		>;
		create: XOR<
			SaleCreateWithoutProductInput,
			SaleUncheckedCreateWithoutProductInput
		>;
	};

	export type SaleUpdateWithWhereUniqueWithoutProductInput = {
		where: SaleWhereUniqueInput;
		data: XOR<
			SaleUpdateWithoutProductInput,
			SaleUncheckedUpdateWithoutProductInput
		>;
	};

	export type SaleUpdateManyWithWhereWithoutProductInput = {
		where: SaleScalarWhereInput;
		data: XOR<
			SaleUpdateManyMutationInput,
			SaleUncheckedUpdateManyWithoutProductInput
		>;
	};

	export type SaleScalarWhereInput = {
		AND?: SaleScalarWhereInput | SaleScalarWhereInput[];
		OR?: SaleScalarWhereInput[];
		NOT?: SaleScalarWhereInput | SaleScalarWhereInput[];
		id?: StringFilter<"Sale"> | string;
		productId?: StringFilter<"Sale"> | string;
		timestamp?: DateTimeFilter<"Sale"> | Date | string;
		quantity?: IntFilter<"Sale"> | number;
		unitPrice?: FloatFilter<"Sale"> | number;
		totalAmount?: FloatFilter<"Sale"> | number;
	};

	export type PurchaseUpsertWithWhereUniqueWithoutProductInput = {
		where: PurchaseWhereUniqueInput;
		update: XOR<
			PurchaseUpdateWithoutProductInput,
			PurchaseUncheckedUpdateWithoutProductInput
		>;
		create: XOR<
			PurchaseCreateWithoutProductInput,
			PurchaseUncheckedCreateWithoutProductInput
		>;
	};

	export type PurchaseUpdateWithWhereUniqueWithoutProductInput = {
		where: PurchaseWhereUniqueInput;
		data: XOR<
			PurchaseUpdateWithoutProductInput,
			PurchaseUncheckedUpdateWithoutProductInput
		>;
	};

	export type PurchaseUpdateManyWithWhereWithoutProductInput = {
		where: PurchaseScalarWhereInput;
		data: XOR<
			PurchaseUpdateManyMutationInput,
			PurchaseUncheckedUpdateManyWithoutProductInput
		>;
	};

	export type PurchaseScalarWhereInput = {
		AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[];
		OR?: PurchaseScalarWhereInput[];
		NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[];
		id?: StringFilter<"Purchase"> | string;
		productId?: StringFilter<"Purchase"> | string;
		timestamp?: DateTimeFilter<"Purchase"> | Date | string;
		quantity?: IntFilter<"Purchase"> | number;
		unitCost?: FloatFilter<"Purchase"> | number;
		totalCost?: FloatFilter<"Purchase"> | number;
	};

	export type ProductCreateWithoutSalesInput = {
		id?: string;
		name: string;
		price: number;
		rating?: number | null;
		stockQuantity: number;
		Purchases?: PurchaseCreateNestedManyWithoutProductInput;
	};

	export type ProductUncheckedCreateWithoutSalesInput = {
		id?: string;
		name: string;
		price: number;
		rating?: number | null;
		stockQuantity: number;
		Purchases?: PurchaseUncheckedCreateNestedManyWithoutProductInput;
	};

	export type ProductCreateOrConnectWithoutSalesInput = {
		where: ProductWhereUniqueInput;
		create: XOR<
			ProductCreateWithoutSalesInput,
			ProductUncheckedCreateWithoutSalesInput
		>;
	};

	export type ProductUpsertWithoutSalesInput = {
		update: XOR<
			ProductUpdateWithoutSalesInput,
			ProductUncheckedUpdateWithoutSalesInput
		>;
		create: XOR<
			ProductCreateWithoutSalesInput,
			ProductUncheckedCreateWithoutSalesInput
		>;
		where?: ProductWhereInput;
	};

	export type ProductUpdateToOneWithWhereWithoutSalesInput = {
		where?: ProductWhereInput;
		data: XOR<
			ProductUpdateWithoutSalesInput,
			ProductUncheckedUpdateWithoutSalesInput
		>;
	};

	export type ProductUpdateWithoutSalesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		price?: FloatFieldUpdateOperationsInput | number;
		rating?: NullableFloatFieldUpdateOperationsInput | number | null;
		stockQuantity?: IntFieldUpdateOperationsInput | number;
		Purchases?: PurchaseUpdateManyWithoutProductNestedInput;
	};

	export type ProductUncheckedUpdateWithoutSalesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		price?: FloatFieldUpdateOperationsInput | number;
		rating?: NullableFloatFieldUpdateOperationsInput | number | null;
		stockQuantity?: IntFieldUpdateOperationsInput | number;
		Purchases?: PurchaseUncheckedUpdateManyWithoutProductNestedInput;
	};

	export type ProductCreateWithoutPurchasesInput = {
		id?: string;
		name: string;
		price: number;
		rating?: number | null;
		stockQuantity: number;
		Sales?: SaleCreateNestedManyWithoutProductInput;
	};

	export type ProductUncheckedCreateWithoutPurchasesInput = {
		id?: string;
		name: string;
		price: number;
		rating?: number | null;
		stockQuantity: number;
		Sales?: SaleUncheckedCreateNestedManyWithoutProductInput;
	};

	export type ProductCreateOrConnectWithoutPurchasesInput = {
		where: ProductWhereUniqueInput;
		create: XOR<
			ProductCreateWithoutPurchasesInput,
			ProductUncheckedCreateWithoutPurchasesInput
		>;
	};

	export type ProductUpsertWithoutPurchasesInput = {
		update: XOR<
			ProductUpdateWithoutPurchasesInput,
			ProductUncheckedUpdateWithoutPurchasesInput
		>;
		create: XOR<
			ProductCreateWithoutPurchasesInput,
			ProductUncheckedCreateWithoutPurchasesInput
		>;
		where?: ProductWhereInput;
	};

	export type ProductUpdateToOneWithWhereWithoutPurchasesInput = {
		where?: ProductWhereInput;
		data: XOR<
			ProductUpdateWithoutPurchasesInput,
			ProductUncheckedUpdateWithoutPurchasesInput
		>;
	};

	export type ProductUpdateWithoutPurchasesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		price?: FloatFieldUpdateOperationsInput | number;
		rating?: NullableFloatFieldUpdateOperationsInput | number | null;
		stockQuantity?: IntFieldUpdateOperationsInput | number;
		Sales?: SaleUpdateManyWithoutProductNestedInput;
	};

	export type ProductUncheckedUpdateWithoutPurchasesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		price?: FloatFieldUpdateOperationsInput | number;
		rating?: NullableFloatFieldUpdateOperationsInput | number | null;
		stockQuantity?: IntFieldUpdateOperationsInput | number;
		Sales?: SaleUncheckedUpdateManyWithoutProductNestedInput;
	};

	export type ExpenseByCategoryCreateWithoutExpenseSummaryInput = {
		id?: string;
		category: string;
		amount: bigint | number;
		date: Date | string;
	};

	export type ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput = {
		id?: string;
		category: string;
		amount: bigint | number;
		date: Date | string;
	};

	export type ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput = {
		where: ExpenseByCategoryWhereUniqueInput;
		create: XOR<
			ExpenseByCategoryCreateWithoutExpenseSummaryInput,
			ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput
		>;
	};

	export type ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope = {
		data:
			| ExpenseByCategoryCreateManyExpenseSummaryInput
			| ExpenseByCategoryCreateManyExpenseSummaryInput[];
		skipDuplicates?: boolean;
	};

	export type ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput =
		{
			where: ExpenseByCategoryWhereUniqueInput;
			update: XOR<
				ExpenseByCategoryUpdateWithoutExpenseSummaryInput,
				ExpenseByCategoryUncheckedUpdateWithoutExpenseSummaryInput
			>;
			create: XOR<
				ExpenseByCategoryCreateWithoutExpenseSummaryInput,
				ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput
			>;
		};

	export type ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput =
		{
			where: ExpenseByCategoryWhereUniqueInput;
			data: XOR<
				ExpenseByCategoryUpdateWithoutExpenseSummaryInput,
				ExpenseByCategoryUncheckedUpdateWithoutExpenseSummaryInput
			>;
		};

	export type ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput = {
		where: ExpenseByCategoryScalarWhereInput;
		data: XOR<
			ExpenseByCategoryUpdateManyMutationInput,
			ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryInput
		>;
	};

	export type ExpenseByCategoryScalarWhereInput = {
		AND?:
			| ExpenseByCategoryScalarWhereInput
			| ExpenseByCategoryScalarWhereInput[];
		OR?: ExpenseByCategoryScalarWhereInput[];
		NOT?:
			| ExpenseByCategoryScalarWhereInput
			| ExpenseByCategoryScalarWhereInput[];
		id?: StringFilter<"ExpenseByCategory"> | string;
		expenseSummaryId?: StringFilter<"ExpenseByCategory"> | string;
		category?: StringFilter<"ExpenseByCategory"> | string;
		amount?: BigIntFilter<"ExpenseByCategory"> | bigint | number;
		date?: DateTimeFilter<"ExpenseByCategory"> | Date | string;
	};

	export type ExpenseSummaryCreateWithoutExpenseByCategoryInput = {
		id?: string;
		totalExpenses: number;
		date: Date | string;
	};

	export type ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput = {
		id?: string;
		totalExpenses: number;
		date: Date | string;
	};

	export type ExpenseSummaryCreateOrConnectWithoutExpenseByCategoryInput = {
		where: ExpenseSummaryWhereUniqueInput;
		create: XOR<
			ExpenseSummaryCreateWithoutExpenseByCategoryInput,
			ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput
		>;
	};

	export type ExpenseSummaryUpsertWithoutExpenseByCategoryInput = {
		update: XOR<
			ExpenseSummaryUpdateWithoutExpenseByCategoryInput,
			ExpenseSummaryUncheckedUpdateWithoutExpenseByCategoryInput
		>;
		create: XOR<
			ExpenseSummaryCreateWithoutExpenseByCategoryInput,
			ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput
		>;
		where?: ExpenseSummaryWhereInput;
	};

	export type ExpenseSummaryUpdateToOneWithWhereWithoutExpenseByCategoryInput =
		{
			where?: ExpenseSummaryWhereInput;
			data: XOR<
				ExpenseSummaryUpdateWithoutExpenseByCategoryInput,
				ExpenseSummaryUncheckedUpdateWithoutExpenseByCategoryInput
			>;
		};

	export type ExpenseSummaryUpdateWithoutExpenseByCategoryInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalExpenses?: FloatFieldUpdateOperationsInput | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseSummaryUncheckedUpdateWithoutExpenseByCategoryInput = {
		id?: StringFieldUpdateOperationsInput | string;
		totalExpenses?: FloatFieldUpdateOperationsInput | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type SaleCreateManyProductInput = {
		id?: string;
		timestamp: Date | string;
		quantity: number;
		unitPrice: number;
		totalAmount: number;
	};

	export type PurchaseCreateManyProductInput = {
		id?: string;
		timestamp: Date | string;
		quantity: number;
		unitCost: number;
		totalCost: number;
	};

	export type SaleUpdateWithoutProductInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitPrice?: FloatFieldUpdateOperationsInput | number;
		totalAmount?: FloatFieldUpdateOperationsInput | number;
	};

	export type SaleUncheckedUpdateWithoutProductInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitPrice?: FloatFieldUpdateOperationsInput | number;
		totalAmount?: FloatFieldUpdateOperationsInput | number;
	};

	export type SaleUncheckedUpdateManyWithoutProductInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitPrice?: FloatFieldUpdateOperationsInput | number;
		totalAmount?: FloatFieldUpdateOperationsInput | number;
	};

	export type PurchaseUpdateWithoutProductInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitCost?: FloatFieldUpdateOperationsInput | number;
		totalCost?: FloatFieldUpdateOperationsInput | number;
	};

	export type PurchaseUncheckedUpdateWithoutProductInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitCost?: FloatFieldUpdateOperationsInput | number;
		totalCost?: FloatFieldUpdateOperationsInput | number;
	};

	export type PurchaseUncheckedUpdateManyWithoutProductInput = {
		id?: StringFieldUpdateOperationsInput | string;
		timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
		quantity?: IntFieldUpdateOperationsInput | number;
		unitCost?: FloatFieldUpdateOperationsInput | number;
		totalCost?: FloatFieldUpdateOperationsInput | number;
	};

	export type ExpenseByCategoryCreateManyExpenseSummaryInput = {
		id?: string;
		category: string;
		amount: bigint | number;
		date: Date | string;
	};

	export type ExpenseByCategoryUpdateWithoutExpenseSummaryInput = {
		id?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: BigIntFieldUpdateOperationsInput | bigint | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseByCategoryUncheckedUpdateWithoutExpenseSummaryInput = {
		id?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: BigIntFieldUpdateOperationsInput | bigint | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryInput = {
		id?: StringFieldUpdateOperationsInput | string;
		category?: StringFieldUpdateOperationsInput | string;
		amount?: BigIntFieldUpdateOperationsInput | bigint | number;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export type BatchPayload = {
		count: number;
	};

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF;
}
