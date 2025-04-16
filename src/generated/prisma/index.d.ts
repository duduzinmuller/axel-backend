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
 * Model Interaction
 *
 */
export type Interaction = $Result.DefaultSelection<Prisma.$InteractionPayload>;
/**
 * Model UserPreference
 *
 */
export type UserPreference =
  $Result.DefaultSelection<Prisma.$UserPreferencePayload>;
/**
 * Model Payment
 *
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>;
/**
 * Model EmailNotification
 *
 */
export type EmailNotification =
  $Result.DefaultSelection<Prisma.$EmailNotificationPayload>;
/**
 * Model EmailVerification
 *
 */
export type EmailVerification =
  $Result.DefaultSelection<Prisma.$EmailVerificationPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Plan: {
    FREE: "FREE";
    MONTHLY: "MONTHLY";
    ANNUAL: "ANNUAL";
  };

  export type Plan = (typeof Plan)[keyof typeof Plan];

  export const PaymentStatus: {
    PENDING: "PENDING";
    COMPLETED: "COMPLETED";
    FAILED: "FAILED";
    CANCELED: "CANCELED";
  };

  export type PaymentStatus =
    (typeof PaymentStatus)[keyof typeof PaymentStatus];

  export const EmailStatus: {
    PENDING: "PENDING";
    SENT: "SENT";
    FAILED: "FAILED";
  };

  export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus];

  export const Provider: {
    LOCAL: "LOCAL";
    GOOGLE: "GOOGLE";
    FACEBOOK: "FACEBOOK";
    MICROSOFT: "MICROSOFT";
  };

  export type Provider = (typeof Provider)[keyof typeof Provider];
}

export type Plan = $Enums.Plan;

export const Plan: typeof $Enums.Plan;

export type PaymentStatus = $Enums.PaymentStatus;

export const PaymentStatus: typeof $Enums.PaymentStatus;

export type EmailStatus = $Enums.EmailStatus;

export const EmailStatus: typeof $Enums.EmailStatus;

export type Provider = $Enums.Provider;

export const Provider: typeof $Enums.Provider;

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
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
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
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
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
   * `prisma.interaction`: Exposes CRUD operations for the **Interaction** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Interactions
   * const interactions = await prisma.interaction.findMany()
   * ```
   */
  get interaction(): Prisma.InteractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserPreferences
   * const userPreferences = await prisma.userPreference.findMany()
   * ```
   */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailNotification`: Exposes CRUD operations for the **EmailNotification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more EmailNotifications
   * const emailNotifications = await prisma.emailNotification.findMany()
   * ```
   */
  get emailNotification(): Prisma.EmailNotificationDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.emailVerification`: Exposes CRUD operations for the **EmailVerification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more EmailVerifications
   * const emailVerifications = await prisma.emailVerification.findMany()
   * ```
   */
  get emailVerification(): Prisma.EmailVerificationDelegate<
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
    Interaction: "Interaction";
    UserPreference: "UserPreference";
    Payment: "Payment";
    EmailNotification: "EmailNotification";
    EmailVerification: "EmailVerification";
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
        | "interaction"
        | "userPreference"
        | "payment"
        | "emailNotification"
        | "emailVerification";
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
      Interaction: {
        payload: Prisma.$InteractionPayload<ExtArgs>;
        fields: Prisma.InteractionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InteractionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InteractionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>;
          };
          findFirst: {
            args: Prisma.InteractionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InteractionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>;
          };
          findMany: {
            args: Prisma.InteractionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[];
          };
          create: {
            args: Prisma.InteractionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>;
          };
          createMany: {
            args: Prisma.InteractionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InteractionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[];
          };
          delete: {
            args: Prisma.InteractionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>;
          };
          update: {
            args: Prisma.InteractionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>;
          };
          deleteMany: {
            args: Prisma.InteractionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InteractionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InteractionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[];
          };
          upsert: {
            args: Prisma.InteractionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>;
          };
          aggregate: {
            args: Prisma.InteractionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInteraction>;
          };
          groupBy: {
            args: Prisma.InteractionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InteractionGroupByOutputType>[];
          };
          count: {
            args: Prisma.InteractionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<InteractionCountAggregateOutputType>
              | number;
          };
        };
      };
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>;
        fields: Prisma.UserPreferenceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[];
          };
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[];
          };
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[];
          };
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserPreference>;
          };
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserPreferenceCountAggregateOutputType>
              | number;
          };
        };
      };
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>;
        fields: Prisma.PaymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
      EmailNotification: {
        payload: Prisma.$EmailNotificationPayload<ExtArgs>;
        fields: Prisma.EmailNotificationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EmailNotificationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EmailNotificationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>;
          };
          findFirst: {
            args: Prisma.EmailNotificationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EmailNotificationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>;
          };
          findMany: {
            args: Prisma.EmailNotificationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[];
          };
          create: {
            args: Prisma.EmailNotificationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>;
          };
          createMany: {
            args: Prisma.EmailNotificationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EmailNotificationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[];
          };
          delete: {
            args: Prisma.EmailNotificationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>;
          };
          update: {
            args: Prisma.EmailNotificationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>;
          };
          deleteMany: {
            args: Prisma.EmailNotificationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EmailNotificationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EmailNotificationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[];
          };
          upsert: {
            args: Prisma.EmailNotificationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>;
          };
          aggregate: {
            args: Prisma.EmailNotificationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmailNotification>;
          };
          groupBy: {
            args: Prisma.EmailNotificationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmailNotificationGroupByOutputType>[];
          };
          count: {
            args: Prisma.EmailNotificationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<EmailNotificationCountAggregateOutputType>
              | number;
          };
        };
      };
      EmailVerification: {
        payload: Prisma.$EmailVerificationPayload<ExtArgs>;
        fields: Prisma.EmailVerificationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>;
          };
          findFirst: {
            args: Prisma.EmailVerificationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EmailVerificationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>;
          };
          findMany: {
            args: Prisma.EmailVerificationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[];
          };
          create: {
            args: Prisma.EmailVerificationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>;
          };
          createMany: {
            args: Prisma.EmailVerificationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EmailVerificationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[];
          };
          delete: {
            args: Prisma.EmailVerificationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>;
          };
          update: {
            args: Prisma.EmailVerificationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>;
          };
          deleteMany: {
            args: Prisma.EmailVerificationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EmailVerificationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EmailVerificationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[];
          };
          upsert: {
            args: Prisma.EmailVerificationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>;
          };
          aggregate: {
            args: Prisma.EmailVerificationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmailVerification>;
          };
          groupBy: {
            args: Prisma.EmailVerificationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmailVerificationGroupByOutputType>[];
          };
          count: {
            args: Prisma.EmailVerificationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<EmailVerificationCountAggregateOutputType>
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
    interaction?: InteractionOmit;
    userPreference?: UserPreferenceOmit;
    payment?: PaymentOmit;
    emailNotification?: EmailNotificationOmit;
    emailVerification?: EmailVerificationOmit;
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    interactions: number;
    preferences: number;
    payments: number;
    emailVerifications: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    interactions?: boolean | UserCountOutputTypeCountInteractionsArgs;
    preferences?: boolean | UserCountOutputTypeCountPreferencesArgs;
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs;
    emailVerifications?:
      | boolean
      | UserCountOutputTypeCountEmailVerificationsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInteractionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InteractionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferencesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserPreferenceWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailVerificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EmailVerificationWhereInput;
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
    password: string | null;
    image: string | null;
    provider: $Enums.Provider | null;
    providerId: string | null;
    plan: $Enums.Plan | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    image: string | null;
    provider: $Enums.Provider | null;
    providerId: string | null;
    plan: $Enums.Plan | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    image: number;
    provider: number;
    providerId: number;
    plan: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    image?: true;
    provider?: true;
    providerId?: true;
    plan?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    image?: true;
    provider?: true;
    providerId?: true;
    plan?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    image?: true;
    provider?: true;
    providerId?: true;
    plan?: true;
    createdAt?: true;
    updatedAt?: true;
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
    password: string;
    image: string | null;
    provider: $Enums.Provider;
    providerId: string | null;
    plan: $Enums.Plan;
    createdAt: Date;
    updatedAt: Date;
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
      password?: boolean;
      image?: boolean;
      provider?: boolean;
      providerId?: boolean;
      plan?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      interactions?: boolean | User$interactionsArgs<ExtArgs>;
      preferences?: boolean | User$preferencesArgs<ExtArgs>;
      payments?: boolean | User$paymentsArgs<ExtArgs>;
      emailVerifications?: boolean | User$emailVerificationsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
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
      password?: boolean;
      image?: boolean;
      provider?: boolean;
      providerId?: boolean;
      plan?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
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
      password?: boolean;
      image?: boolean;
      provider?: boolean;
      providerId?: boolean;
      plan?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    image?: boolean;
    provider?: boolean;
    providerId?: boolean;
    plan?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "email"
    | "password"
    | "image"
    | "provider"
    | "providerId"
    | "plan"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    interactions?: boolean | User$interactionsArgs<ExtArgs>;
    preferences?: boolean | User$preferencesArgs<ExtArgs>;
    payments?: boolean | User$paymentsArgs<ExtArgs>;
    emailVerifications?: boolean | User$emailVerificationsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      interactions: Prisma.$InteractionPayload<ExtArgs>[];
      preferences: Prisma.$UserPreferencePayload<ExtArgs>[];
      payments: Prisma.$PaymentPayload<ExtArgs>[];
      emailVerifications: Prisma.$EmailVerificationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        password: string;
        image: string | null;
        provider: $Enums.Provider;
        providerId: string | null;
        plan: $Enums.Plan;
        createdAt: Date;
        updatedAt: Date;
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
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
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
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
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
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
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
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
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
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
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
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
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
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
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
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
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
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
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
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
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
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
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
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
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
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
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
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
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
      args?: Subset<T, UserCountArgs>,
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
      args: Subset<T, UserAggregateArgs>,
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
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
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
    interactions<T extends User$interactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$interactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InteractionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$preferencesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserPreferencePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$paymentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PaymentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    emailVerifications<T extends User$emailVerificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$emailVerificationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$EmailVerificationPayload<ExtArgs>,
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
        | null,
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
        | null,
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
    readonly password: FieldRef<"User", "String">;
    readonly image: FieldRef<"User", "String">;
    readonly provider: FieldRef<"User", "Provider">;
    readonly providerId: FieldRef<"User", "String">;
    readonly plan: FieldRef<"User", "Plan">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
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
   * User.interactions
   */
  export type User$interactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    where?: InteractionWhereInput;
    orderBy?:
      | InteractionOrderByWithRelationInput
      | InteractionOrderByWithRelationInput[];
    cursor?: InteractionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[];
  };

  /**
   * User.preferences
   */
  export type User$preferencesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    where?: UserPreferenceWhereInput;
    orderBy?:
      | UserPreferenceOrderByWithRelationInput
      | UserPreferenceOrderByWithRelationInput[];
    cursor?: UserPreferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[];
  };

  /**
   * User.payments
   */
  export type User$paymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    cursor?: PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * User.emailVerifications
   */
  export type User$emailVerificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    where?: EmailVerificationWhereInput;
    orderBy?:
      | EmailVerificationOrderByWithRelationInput
      | EmailVerificationOrderByWithRelationInput[];
    cursor?: EmailVerificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | EmailVerificationScalarFieldEnum
      | EmailVerificationScalarFieldEnum[];
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Interaction
   */

  export type AggregateInteraction = {
    _count: InteractionCountAggregateOutputType | null;
    _min: InteractionMinAggregateOutputType | null;
    _max: InteractionMaxAggregateOutputType | null;
  };

  export type InteractionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    input: string | null;
    response: string | null;
    timestamp: Date | null;
  };

  export type InteractionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    input: string | null;
    response: string | null;
    timestamp: Date | null;
  };

  export type InteractionCountAggregateOutputType = {
    id: number;
    userId: number;
    input: number;
    response: number;
    timestamp: number;
    context: number;
    _all: number;
  };

  export type InteractionMinAggregateInputType = {
    id?: true;
    userId?: true;
    input?: true;
    response?: true;
    timestamp?: true;
  };

  export type InteractionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    input?: true;
    response?: true;
    timestamp?: true;
  };

  export type InteractionCountAggregateInputType = {
    id?: true;
    userId?: true;
    input?: true;
    response?: true;
    timestamp?: true;
    context?: true;
    _all?: true;
  };

  export type InteractionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Interaction to aggregate.
     */
    where?: InteractionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Interactions to fetch.
     */
    orderBy?:
      | InteractionOrderByWithRelationInput
      | InteractionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InteractionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Interactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Interactions
     **/
    _count?: true | InteractionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InteractionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InteractionMaxAggregateInputType;
  };

  export type GetInteractionAggregateType<T extends InteractionAggregateArgs> =
    {
      [P in keyof T & keyof AggregateInteraction]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateInteraction[P]>
        : GetScalarType<T[P], AggregateInteraction[P]>;
    };

  export type InteractionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InteractionWhereInput;
    orderBy?:
      | InteractionOrderByWithAggregationInput
      | InteractionOrderByWithAggregationInput[];
    by: InteractionScalarFieldEnum[] | InteractionScalarFieldEnum;
    having?: InteractionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InteractionCountAggregateInputType | true;
    _min?: InteractionMinAggregateInputType;
    _max?: InteractionMaxAggregateInputType;
  };

  export type InteractionGroupByOutputType = {
    id: string;
    userId: string;
    input: string;
    response: string;
    timestamp: Date;
    context: JsonValue | null;
    _count: InteractionCountAggregateOutputType | null;
    _min: InteractionMinAggregateOutputType | null;
    _max: InteractionMaxAggregateOutputType | null;
  };

  type GetInteractionGroupByPayload<T extends InteractionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InteractionGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof InteractionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractionGroupByOutputType[P]>
            : GetScalarType<T[P], InteractionGroupByOutputType[P]>;
        }
      >
    >;

  export type InteractionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      input?: boolean;
      response?: boolean;
      timestamp?: boolean;
      context?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["interaction"]
  >;

  export type InteractionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      input?: boolean;
      response?: boolean;
      timestamp?: boolean;
      context?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["interaction"]
  >;

  export type InteractionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      input?: boolean;
      response?: boolean;
      timestamp?: boolean;
      context?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["interaction"]
  >;

  export type InteractionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    input?: boolean;
    response?: boolean;
    timestamp?: boolean;
    context?: boolean;
  };

  export type InteractionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "input" | "response" | "timestamp" | "context",
    ExtArgs["result"]["interaction"]
  >;
  export type InteractionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type InteractionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type InteractionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $InteractionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Interaction";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        input: string;
        response: string;
        timestamp: Date;
        context: Prisma.JsonValue | null;
      },
      ExtArgs["result"]["interaction"]
    >;
    composites: {};
  };

  type InteractionGetPayload<
    S extends boolean | null | undefined | InteractionDefaultArgs,
  > = $Result.GetResult<Prisma.$InteractionPayload, S>;

  type InteractionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    InteractionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: InteractionCountAggregateInputType | true;
  };

  export interface InteractionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Interaction"];
      meta: { name: "Interaction" };
    };
    /**
     * Find zero or one Interaction that matches the filter.
     * @param {InteractionFindUniqueArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractionFindUniqueArgs>(
      args: SelectSubset<T, InteractionFindUniqueArgs<ExtArgs>>,
    ): Prisma__InteractionClient<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Interaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractionFindUniqueOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InteractionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__InteractionClient<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Interaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractionFindFirstArgs>(
      args?: SelectSubset<T, InteractionFindFirstArgs<ExtArgs>>,
    ): Prisma__InteractionClient<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Interaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InteractionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__InteractionClient<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interactions
     * const interactions = await prisma.interaction.findMany()
     *
     * // Get first 10 Interactions
     * const interactions = await prisma.interaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const interactionWithIdOnly = await prisma.interaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InteractionFindManyArgs>(
      args?: SelectSubset<T, InteractionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Interaction.
     * @param {InteractionCreateArgs} args - Arguments to create a Interaction.
     * @example
     * // Create one Interaction
     * const Interaction = await prisma.interaction.create({
     *   data: {
     *     // ... data to create a Interaction
     *   }
     * })
     *
     */
    create<T extends InteractionCreateArgs>(
      args: SelectSubset<T, InteractionCreateArgs<ExtArgs>>,
    ): Prisma__InteractionClient<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Interactions.
     * @param {InteractionCreateManyArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InteractionCreateManyArgs>(
      args?: SelectSubset<T, InteractionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Interactions and returns the data saved in the database.
     * @param {InteractionCreateManyAndReturnArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InteractionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InteractionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Interaction.
     * @param {InteractionDeleteArgs} args - Arguments to delete one Interaction.
     * @example
     * // Delete one Interaction
     * const Interaction = await prisma.interaction.delete({
     *   where: {
     *     // ... filter to delete one Interaction
     *   }
     * })
     *
     */
    delete<T extends InteractionDeleteArgs>(
      args: SelectSubset<T, InteractionDeleteArgs<ExtArgs>>,
    ): Prisma__InteractionClient<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Interaction.
     * @param {InteractionUpdateArgs} args - Arguments to update one Interaction.
     * @example
     * // Update one Interaction
     * const interaction = await prisma.interaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InteractionUpdateArgs>(
      args: SelectSubset<T, InteractionUpdateArgs<ExtArgs>>,
    ): Prisma__InteractionClient<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Interactions.
     * @param {InteractionDeleteManyArgs} args - Arguments to filter Interactions to delete.
     * @example
     * // Delete a few Interactions
     * const { count } = await prisma.interaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InteractionDeleteManyArgs>(
      args?: SelectSubset<T, InteractionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InteractionUpdateManyArgs>(
      args: SelectSubset<T, InteractionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Interactions and returns the data updated in the database.
     * @param {InteractionUpdateManyAndReturnArgs} args - Arguments to update many Interactions.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends InteractionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InteractionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Interaction.
     * @param {InteractionUpsertArgs} args - Arguments to update or create a Interaction.
     * @example
     * // Update or create a Interaction
     * const interaction = await prisma.interaction.upsert({
     *   create: {
     *     // ... data to create a Interaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interaction we want to update
     *   }
     * })
     */
    upsert<T extends InteractionUpsertArgs>(
      args: SelectSubset<T, InteractionUpsertArgs<ExtArgs>>,
    ): Prisma__InteractionClient<
      $Result.GetResult<
        Prisma.$InteractionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionCountArgs} args - Arguments to filter Interactions to count.
     * @example
     * // Count the number of Interactions
     * const count = await prisma.interaction.count({
     *   where: {
     *     // ... the filter for the Interactions we want to count
     *   }
     * })
     **/
    count<T extends InteractionCountArgs>(
      args?: Subset<T, InteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], InteractionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InteractionAggregateArgs>(
      args: Subset<T, InteractionAggregateArgs>,
    ): Prisma.PrismaPromise<GetInteractionAggregateType<T>>;

    /**
     * Group by Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionGroupByArgs} args - Group by arguments.
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
      T extends InteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractionGroupByArgs["orderBy"] }
        : { orderBy?: InteractionGroupByArgs["orderBy"] },
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
      args: SubsetIntersection<T, InteractionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetInteractionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Interaction model
     */
    readonly fields: InteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
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
        | null,
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
        | null,
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
   * Fields of the Interaction model
   */
  interface InteractionFieldRefs {
    readonly id: FieldRef<"Interaction", "String">;
    readonly userId: FieldRef<"Interaction", "String">;
    readonly input: FieldRef<"Interaction", "String">;
    readonly response: FieldRef<"Interaction", "String">;
    readonly timestamp: FieldRef<"Interaction", "DateTime">;
    readonly context: FieldRef<"Interaction", "Json">;
  }

  // Custom InputTypes
  /**
   * Interaction findUnique
   */
  export type InteractionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput;
  };

  /**
   * Interaction findUniqueOrThrow
   */
  export type InteractionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput;
  };

  /**
   * Interaction findFirst
   */
  export type InteractionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Interactions to fetch.
     */
    orderBy?:
      | InteractionOrderByWithRelationInput
      | InteractionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Interactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[];
  };

  /**
   * Interaction findFirstOrThrow
   */
  export type InteractionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Interactions to fetch.
     */
    orderBy?:
      | InteractionOrderByWithRelationInput
      | InteractionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Interactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[];
  };

  /**
   * Interaction findMany
   */
  export type InteractionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Interactions to fetch.
     */
    orderBy?:
      | InteractionOrderByWithRelationInput
      | InteractionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Interactions.
     */
    cursor?: InteractionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Interactions.
     */
    skip?: number;
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[];
  };

  /**
   * Interaction create
   */
  export type InteractionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Interaction.
     */
    data: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>;
  };

  /**
   * Interaction createMany
   */
  export type InteractionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Interaction createManyAndReturn
   */
  export type InteractionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Interaction update
   */
  export type InteractionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Interaction.
     */
    data: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>;
    /**
     * Choose, which Interaction to update.
     */
    where: InteractionWhereUniqueInput;
  };

  /**
   * Interaction updateMany
   */
  export type InteractionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Interactions.
     */
    data: XOR<
      InteractionUpdateManyMutationInput,
      InteractionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput;
    /**
     * Limit how many Interactions to update.
     */
    limit?: number;
  };

  /**
   * Interaction updateManyAndReturn
   */
  export type InteractionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * The data used to update Interactions.
     */
    data: XOR<
      InteractionUpdateManyMutationInput,
      InteractionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput;
    /**
     * Limit how many Interactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Interaction upsert
   */
  export type InteractionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Interaction to update in case it exists.
     */
    where: InteractionWhereUniqueInput;
    /**
     * In case the Interaction found by the `where` argument doesn't exist, create a new Interaction with this data.
     */
    create: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>;
    /**
     * In case the Interaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>;
  };

  /**
   * Interaction delete
   */
  export type InteractionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
    /**
     * Filter which Interaction to delete.
     */
    where: InteractionWhereUniqueInput;
  };

  /**
   * Interaction deleteMany
   */
  export type InteractionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Interactions to delete
     */
    where?: InteractionWhereInput;
    /**
     * Limit how many Interactions to delete.
     */
    limit?: number;
  };

  /**
   * Interaction without action
   */
  export type InteractionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null;
  };

  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null;
    _min: UserPreferenceMinAggregateOutputType | null;
    _max: UserPreferenceMaxAggregateOutputType | null;
  };

  export type UserPreferenceMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    language: string | null;
    theme: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserPreferenceMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    language: string | null;
    theme: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserPreferenceCountAggregateOutputType = {
    id: number;
    userId: number;
    language: number;
    theme: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserPreferenceMinAggregateInputType = {
    id?: true;
    userId?: true;
    language?: true;
    theme?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserPreferenceMaxAggregateInputType = {
    id?: true;
    userId?: true;
    language?: true;
    theme?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserPreferenceCountAggregateInputType = {
    id?: true;
    userId?: true;
    language?: true;
    theme?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserPreferenceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?:
      | UserPreferenceOrderByWithRelationInput
      | UserPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserPreferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserPreferences
     **/
    _count?: true | UserPreferenceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserPreferenceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserPreferenceMaxAggregateInputType;
  };

  export type GetUserPreferenceAggregateType<
    T extends UserPreferenceAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUserPreference]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>;
  };

  export type UserPreferenceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserPreferenceWhereInput;
    orderBy?:
      | UserPreferenceOrderByWithAggregationInput
      | UserPreferenceOrderByWithAggregationInput[];
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum;
    having?: UserPreferenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserPreferenceCountAggregateInputType | true;
    _min?: UserPreferenceMinAggregateInputType;
    _max?: UserPreferenceMaxAggregateInputType;
  };

  export type UserPreferenceGroupByOutputType = {
    id: string;
    userId: string;
    language: string;
    theme: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserPreferenceCountAggregateOutputType | null;
    _min: UserPreferenceMinAggregateOutputType | null;
    _max: UserPreferenceMaxAggregateOutputType | null;
  };

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserPreferenceGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof UserPreferenceGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>;
        }
      >
    >;

  export type UserPreferenceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      language?: boolean;
      theme?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userPreference"]
  >;

  export type UserPreferenceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      language?: boolean;
      theme?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userPreference"]
  >;

  export type UserPreferenceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      language?: boolean;
      theme?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userPreference"]
  >;

  export type UserPreferenceSelectScalar = {
    id?: boolean;
    userId?: boolean;
    language?: boolean;
    theme?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserPreferenceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "language" | "theme" | "createdAt" | "updatedAt",
    ExtArgs["result"]["userPreference"]
  >;
  export type UserPreferenceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserPreferenceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserPreferenceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $UserPreferencePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "UserPreference";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        language: string;
        theme: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["userPreference"]
    >;
    composites: {};
  };

  type UserPreferenceGetPayload<
    S extends boolean | null | undefined | UserPreferenceDefaultArgs,
  > = $Result.GetResult<Prisma.$UserPreferencePayload, S>;

  type UserPreferenceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserPreferenceFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: UserPreferenceCountAggregateInputType | true;
  };

  export interface UserPreferenceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["UserPreference"];
      meta: { name: "UserPreference" };
    };
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(
      args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(
      args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     *
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserPreferenceFindManyArgs>(
      args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     *
     */
    create<T extends UserPreferenceCreateArgs>(
      args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserPreferenceCreateManyArgs>(
      args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     *
     */
    delete<T extends UserPreferenceDeleteArgs>(
      args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserPreferenceUpdateArgs>(
      args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(
      args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(
      args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(
      args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
     **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserPreferenceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferenceAggregateArgs>(
      args: Subset<T, UserPreferenceAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>;

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs["orderBy"] }
        : { orderBy?: UserPreferenceGroupByArgs["orderBy"] },
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
      args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserPreferenceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserPreference model
     */
    readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
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
        | null,
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
        | null,
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
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", "String">;
    readonly userId: FieldRef<"UserPreference", "String">;
    readonly language: FieldRef<"UserPreference", "String">;
    readonly theme: FieldRef<"UserPreference", "String">;
    readonly createdAt: FieldRef<"UserPreference", "DateTime">;
    readonly updatedAt: FieldRef<"UserPreference", "DateTime">;
  }

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput;
  };

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput;
  };

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?:
      | UserPreferenceOrderByWithRelationInput
      | UserPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserPreferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[];
  };

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?:
      | UserPreferenceOrderByWithRelationInput
      | UserPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserPreferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[];
  };

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?:
      | UserPreferenceOrderByWithRelationInput
      | UserPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserPreferences.
     */
    skip?: number;
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[];
  };

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>;
  };

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>;
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput;
  };

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<
      UserPreferenceUpdateManyMutationInput,
      UserPreferenceUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput;
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number;
  };

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<
      UserPreferenceUpdateManyMutationInput,
      UserPreferenceUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput;
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput;
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>;
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>;
  };

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput;
  };

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput;
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number;
  };

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
  };

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null;
  };

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null;
  };

  export type PaymentMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    externalId: string | null;
    status: $Enums.PaymentStatus | null;
    amount: Decimal | null;
    paymentMethod: string | null;
    paymentMethodId: string | null;
    paymentProvider: string | null;
    paymentUrl: string | null;
    notificationSent: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PaymentMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    externalId: string | null;
    status: $Enums.PaymentStatus | null;
    amount: Decimal | null;
    paymentMethod: string | null;
    paymentMethodId: string | null;
    paymentProvider: string | null;
    paymentUrl: string | null;
    notificationSent: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PaymentCountAggregateOutputType = {
    id: number;
    userId: number;
    externalId: number;
    status: number;
    amount: number;
    paymentMethod: number;
    paymentMethodId: number;
    paymentProvider: number;
    paymentUrl: number;
    transactionDetails: number;
    notificationSent: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    amount?: true;
  };

  export type PaymentSumAggregateInputType = {
    amount?: true;
  };

  export type PaymentMinAggregateInputType = {
    id?: true;
    userId?: true;
    externalId?: true;
    status?: true;
    amount?: true;
    paymentMethod?: true;
    paymentMethodId?: true;
    paymentProvider?: true;
    paymentUrl?: true;
    notificationSent?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PaymentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    externalId?: true;
    status?: true;
    amount?: true;
    paymentMethod?: true;
    paymentMethodId?: true;
    paymentProvider?: true;
    paymentUrl?: true;
    notificationSent?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PaymentCountAggregateInputType = {
    id?: true;
    userId?: true;
    externalId?: true;
    status?: true;
    amount?: true;
    paymentMethod?: true;
    paymentMethodId?: true;
    paymentProvider?: true;
    paymentUrl?: true;
    transactionDetails?: true;
    notificationSent?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type PaymentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithAggregationInput
      | PaymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    id: string;
    userId: string;
    externalId: string | null;
    status: $Enums.PaymentStatus;
    amount: Decimal;
    paymentMethod: string | null;
    paymentMethodId: string | null;
    paymentProvider: string;
    paymentUrl: string | null;
    transactionDetails: JsonValue | null;
    notificationSent: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PaymentGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof PaymentGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
        }
      >
    >;

  export type PaymentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      externalId?: boolean;
      status?: boolean;
      amount?: boolean;
      paymentMethod?: boolean;
      paymentMethodId?: boolean;
      paymentProvider?: boolean;
      paymentUrl?: boolean;
      transactionDetails?: boolean;
      notificationSent?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["payment"]
  >;

  export type PaymentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      externalId?: boolean;
      status?: boolean;
      amount?: boolean;
      paymentMethod?: boolean;
      paymentMethodId?: boolean;
      paymentProvider?: boolean;
      paymentUrl?: boolean;
      transactionDetails?: boolean;
      notificationSent?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["payment"]
  >;

  export type PaymentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      externalId?: boolean;
      status?: boolean;
      amount?: boolean;
      paymentMethod?: boolean;
      paymentMethodId?: boolean;
      paymentProvider?: boolean;
      paymentUrl?: boolean;
      transactionDetails?: boolean;
      notificationSent?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["payment"]
  >;

  export type PaymentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    externalId?: boolean;
    status?: boolean;
    amount?: boolean;
    paymentMethod?: boolean;
    paymentMethodId?: boolean;
    paymentProvider?: boolean;
    paymentUrl?: boolean;
    transactionDetails?: boolean;
    notificationSent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PaymentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "externalId"
    | "status"
    | "amount"
    | "paymentMethod"
    | "paymentMethodId"
    | "paymentProvider"
    | "paymentUrl"
    | "transactionDetails"
    | "notificationSent"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["payment"]
  >;
  export type PaymentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PaymentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PaymentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PaymentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Payment";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        externalId: string | null;
        status: $Enums.PaymentStatus;
        amount: Prisma.Decimal;
        paymentMethod: string | null;
        paymentMethodId: string | null;
        paymentProvider: string;
        paymentUrl: string | null;
        transactionDetails: Prisma.JsonValue | null;
        notificationSent: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["payment"]
    >;
    composites: {};
  };

  type PaymentGetPayload<
    S extends boolean | null | undefined | PaymentDefaultArgs,
  > = $Result.GetResult<Prisma.$PaymentPayload, S>;

  type PaymentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PaymentFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface PaymentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Payment"];
      meta: { name: "Payment" };
    };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaymentFindManyArgs>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     */
    create<T extends PaymentCreateArgs>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaymentCreateManyArgs>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     */
    delete<T extends PaymentDeleteArgs>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaymentUpdateArgs>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaymentDeleteManyArgs>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaymentUpdateManyArgs>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs["orderBy"] }
        : { orderBy?: PaymentGroupByArgs["orderBy"] },
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
      args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPaymentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Payment model
     */
    readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
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
        | null,
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
        | null,
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", "String">;
    readonly userId: FieldRef<"Payment", "String">;
    readonly externalId: FieldRef<"Payment", "String">;
    readonly status: FieldRef<"Payment", "PaymentStatus">;
    readonly amount: FieldRef<"Payment", "Decimal">;
    readonly paymentMethod: FieldRef<"Payment", "String">;
    readonly paymentMethodId: FieldRef<"Payment", "String">;
    readonly paymentProvider: FieldRef<"Payment", "String">;
    readonly paymentUrl: FieldRef<"Payment", "String">;
    readonly transactionDetails: FieldRef<"Payment", "Json">;
    readonly notificationSent: FieldRef<"Payment", "Boolean">;
    readonly createdAt: FieldRef<"Payment", "DateTime">;
    readonly updatedAt: FieldRef<"Payment", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment create
   */
  export type PaymentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
  };

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput;
    /**
     * Limit how many Payments to update.
     */
    limit?: number;
  };

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput;
    /**
     * Limit how many Payments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput;
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
  };

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput;
    /**
     * Limit how many Payments to delete.
     */
    limit?: number;
  };

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
  };

  /**
   * Model EmailNotification
   */

  export type AggregateEmailNotification = {
    _count: EmailNotificationCountAggregateOutputType | null;
    _min: EmailNotificationMinAggregateOutputType | null;
    _max: EmailNotificationMaxAggregateOutputType | null;
  };

  export type EmailNotificationMinAggregateOutputType = {
    id: string | null;
    recipient: string | null;
    subject: string | null;
    content: string | null;
    status: $Enums.EmailStatus | null;
    sentAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type EmailNotificationMaxAggregateOutputType = {
    id: string | null;
    recipient: string | null;
    subject: string | null;
    content: string | null;
    status: $Enums.EmailStatus | null;
    sentAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type EmailNotificationCountAggregateOutputType = {
    id: number;
    recipient: number;
    subject: number;
    content: number;
    status: number;
    sentAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type EmailNotificationMinAggregateInputType = {
    id?: true;
    recipient?: true;
    subject?: true;
    content?: true;
    status?: true;
    sentAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type EmailNotificationMaxAggregateInputType = {
    id?: true;
    recipient?: true;
    subject?: true;
    content?: true;
    status?: true;
    sentAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type EmailNotificationCountAggregateInputType = {
    id?: true;
    recipient?: true;
    subject?: true;
    content?: true;
    status?: true;
    sentAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type EmailNotificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EmailNotification to aggregate.
     */
    where?: EmailNotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?:
      | EmailNotificationOrderByWithRelationInput
      | EmailNotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EmailNotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailNotifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EmailNotifications
     **/
    _count?: true | EmailNotificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmailNotificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmailNotificationMaxAggregateInputType;
  };

  export type GetEmailNotificationAggregateType<
    T extends EmailNotificationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateEmailNotification]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailNotification[P]>
      : GetScalarType<T[P], AggregateEmailNotification[P]>;
  };

  export type EmailNotificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EmailNotificationWhereInput;
    orderBy?:
      | EmailNotificationOrderByWithAggregationInput
      | EmailNotificationOrderByWithAggregationInput[];
    by: EmailNotificationScalarFieldEnum[] | EmailNotificationScalarFieldEnum;
    having?: EmailNotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmailNotificationCountAggregateInputType | true;
    _min?: EmailNotificationMinAggregateInputType;
    _max?: EmailNotificationMaxAggregateInputType;
  };

  export type EmailNotificationGroupByOutputType = {
    id: string;
    recipient: string;
    subject: string;
    content: string;
    status: $Enums.EmailStatus;
    sentAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EmailNotificationCountAggregateOutputType | null;
    _min: EmailNotificationMinAggregateOutputType | null;
    _max: EmailNotificationMaxAggregateOutputType | null;
  };

  type GetEmailNotificationGroupByPayload<
    T extends EmailNotificationGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailNotificationGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof EmailNotificationGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
          : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>;
      }
    >
  >;

  export type EmailNotificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      recipient?: boolean;
      subject?: boolean;
      content?: boolean;
      status?: boolean;
      sentAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["emailNotification"]
  >;

  export type EmailNotificationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      recipient?: boolean;
      subject?: boolean;
      content?: boolean;
      status?: boolean;
      sentAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["emailNotification"]
  >;

  export type EmailNotificationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      recipient?: boolean;
      subject?: boolean;
      content?: boolean;
      status?: boolean;
      sentAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["emailNotification"]
  >;

  export type EmailNotificationSelectScalar = {
    id?: boolean;
    recipient?: boolean;
    subject?: boolean;
    content?: boolean;
    status?: boolean;
    sentAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type EmailNotificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "recipient"
    | "subject"
    | "content"
    | "status"
    | "sentAt"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["emailNotification"]
  >;

  export type $EmailNotificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "EmailNotification";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        recipient: string;
        subject: string;
        content: string;
        status: $Enums.EmailStatus;
        sentAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["emailNotification"]
    >;
    composites: {};
  };

  type EmailNotificationGetPayload<
    S extends boolean | null | undefined | EmailNotificationDefaultArgs,
  > = $Result.GetResult<Prisma.$EmailNotificationPayload, S>;

  type EmailNotificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    EmailNotificationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: EmailNotificationCountAggregateInputType | true;
  };

  export interface EmailNotificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["EmailNotification"];
      meta: { name: "EmailNotification" };
    };
    /**
     * Find zero or one EmailNotification that matches the filter.
     * @param {EmailNotificationFindUniqueArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailNotificationFindUniqueArgs>(
      args: SelectSubset<T, EmailNotificationFindUniqueArgs<ExtArgs>>,
    ): Prisma__EmailNotificationClient<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one EmailNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailNotificationFindUniqueOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailNotificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EmailNotificationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EmailNotificationClient<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first EmailNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailNotificationFindFirstArgs>(
      args?: SelectSubset<T, EmailNotificationFindFirstArgs<ExtArgs>>,
    ): Prisma__EmailNotificationClient<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first EmailNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailNotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmailNotificationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EmailNotificationClient<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more EmailNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany()
     *
     * // Get first 10 EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EmailNotificationFindManyArgs>(
      args?: SelectSubset<T, EmailNotificationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a EmailNotification.
     * @param {EmailNotificationCreateArgs} args - Arguments to create a EmailNotification.
     * @example
     * // Create one EmailNotification
     * const EmailNotification = await prisma.emailNotification.create({
     *   data: {
     *     // ... data to create a EmailNotification
     *   }
     * })
     *
     */
    create<T extends EmailNotificationCreateArgs>(
      args: SelectSubset<T, EmailNotificationCreateArgs<ExtArgs>>,
    ): Prisma__EmailNotificationClient<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many EmailNotifications.
     * @param {EmailNotificationCreateManyArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EmailNotificationCreateManyArgs>(
      args?: SelectSubset<T, EmailNotificationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many EmailNotifications and returns the data saved in the database.
     * @param {EmailNotificationCreateManyAndReturnArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EmailNotificationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, EmailNotificationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a EmailNotification.
     * @param {EmailNotificationDeleteArgs} args - Arguments to delete one EmailNotification.
     * @example
     * // Delete one EmailNotification
     * const EmailNotification = await prisma.emailNotification.delete({
     *   where: {
     *     // ... filter to delete one EmailNotification
     *   }
     * })
     *
     */
    delete<T extends EmailNotificationDeleteArgs>(
      args: SelectSubset<T, EmailNotificationDeleteArgs<ExtArgs>>,
    ): Prisma__EmailNotificationClient<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one EmailNotification.
     * @param {EmailNotificationUpdateArgs} args - Arguments to update one EmailNotification.
     * @example
     * // Update one EmailNotification
     * const emailNotification = await prisma.emailNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EmailNotificationUpdateArgs>(
      args: SelectSubset<T, EmailNotificationUpdateArgs<ExtArgs>>,
    ): Prisma__EmailNotificationClient<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more EmailNotifications.
     * @param {EmailNotificationDeleteManyArgs} args - Arguments to filter EmailNotifications to delete.
     * @example
     * // Delete a few EmailNotifications
     * const { count } = await prisma.emailNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EmailNotificationDeleteManyArgs>(
      args?: SelectSubset<T, EmailNotificationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EmailNotificationUpdateManyArgs>(
      args: SelectSubset<T, EmailNotificationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EmailNotifications and returns the data updated in the database.
     * @param {EmailNotificationUpdateManyAndReturnArgs} args - Arguments to update many EmailNotifications.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailNotificationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EmailNotificationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one EmailNotification.
     * @param {EmailNotificationUpsertArgs} args - Arguments to update or create a EmailNotification.
     * @example
     * // Update or create a EmailNotification
     * const emailNotification = await prisma.emailNotification.upsert({
     *   create: {
     *     // ... data to create a EmailNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailNotification we want to update
     *   }
     * })
     */
    upsert<T extends EmailNotificationUpsertArgs>(
      args: SelectSubset<T, EmailNotificationUpsertArgs<ExtArgs>>,
    ): Prisma__EmailNotificationClient<
      $Result.GetResult<
        Prisma.$EmailNotificationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationCountArgs} args - Arguments to filter EmailNotifications to count.
     * @example
     * // Count the number of EmailNotifications
     * const count = await prisma.emailNotification.count({
     *   where: {
     *     // ... the filter for the EmailNotifications we want to count
     *   }
     * })
     **/
    count<T extends EmailNotificationCountArgs>(
      args?: Subset<T, EmailNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              EmailNotificationCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailNotificationAggregateArgs>(
      args: Subset<T, EmailNotificationAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmailNotificationAggregateType<T>>;

    /**
     * Group by EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationGroupByArgs} args - Group by arguments.
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
      T extends EmailNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailNotificationGroupByArgs["orderBy"] }
        : { orderBy?: EmailNotificationGroupByArgs["orderBy"] },
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
      args: SubsetIntersection<T, EmailNotificationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetEmailNotificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EmailNotification model
     */
    readonly fields: EmailNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailNotificationClient<
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
        | null,
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
        | null,
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
   * Fields of the EmailNotification model
   */
  interface EmailNotificationFieldRefs {
    readonly id: FieldRef<"EmailNotification", "String">;
    readonly recipient: FieldRef<"EmailNotification", "String">;
    readonly subject: FieldRef<"EmailNotification", "String">;
    readonly content: FieldRef<"EmailNotification", "String">;
    readonly status: FieldRef<"EmailNotification", "EmailStatus">;
    readonly sentAt: FieldRef<"EmailNotification", "DateTime">;
    readonly createdAt: FieldRef<"EmailNotification", "DateTime">;
    readonly updatedAt: FieldRef<"EmailNotification", "DateTime">;
  }

  // Custom InputTypes
  /**
   * EmailNotification findUnique
   */
  export type EmailNotificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput;
  };

  /**
   * EmailNotification findUniqueOrThrow
   */
  export type EmailNotificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput;
  };

  /**
   * EmailNotification findFirst
   */
  export type EmailNotificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?:
      | EmailNotificationOrderByWithRelationInput
      | EmailNotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailNotifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?:
      | EmailNotificationScalarFieldEnum
      | EmailNotificationScalarFieldEnum[];
  };

  /**
   * EmailNotification findFirstOrThrow
   */
  export type EmailNotificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?:
      | EmailNotificationOrderByWithRelationInput
      | EmailNotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailNotifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?:
      | EmailNotificationScalarFieldEnum
      | EmailNotificationScalarFieldEnum[];
  };

  /**
   * EmailNotification findMany
   */
  export type EmailNotificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotifications to fetch.
     */
    where?: EmailNotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?:
      | EmailNotificationOrderByWithRelationInput
      | EmailNotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailNotifications.
     */
    skip?: number;
    distinct?:
      | EmailNotificationScalarFieldEnum
      | EmailNotificationScalarFieldEnum[];
  };

  /**
   * EmailNotification create
   */
  export type EmailNotificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * The data needed to create a EmailNotification.
     */
    data: XOR<
      EmailNotificationCreateInput,
      EmailNotificationUncheckedCreateInput
    >;
  };

  /**
   * EmailNotification createMany
   */
  export type EmailNotificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EmailNotification createManyAndReturn
   */
  export type EmailNotificationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EmailNotification update
   */
  export type EmailNotificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * The data needed to update a EmailNotification.
     */
    data: XOR<
      EmailNotificationUpdateInput,
      EmailNotificationUncheckedUpdateInput
    >;
    /**
     * Choose, which EmailNotification to update.
     */
    where: EmailNotificationWhereUniqueInput;
  };

  /**
   * EmailNotification updateMany
   */
  export type EmailNotificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<
      EmailNotificationUpdateManyMutationInput,
      EmailNotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput;
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number;
  };

  /**
   * EmailNotification updateManyAndReturn
   */
  export type EmailNotificationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<
      EmailNotificationUpdateManyMutationInput,
      EmailNotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput;
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number;
  };

  /**
   * EmailNotification upsert
   */
  export type EmailNotificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * The filter to search for the EmailNotification to update in case it exists.
     */
    where: EmailNotificationWhereUniqueInput;
    /**
     * In case the EmailNotification found by the `where` argument doesn't exist, create a new EmailNotification with this data.
     */
    create: XOR<
      EmailNotificationCreateInput,
      EmailNotificationUncheckedCreateInput
    >;
    /**
     * In case the EmailNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      EmailNotificationUpdateInput,
      EmailNotificationUncheckedUpdateInput
    >;
  };

  /**
   * EmailNotification delete
   */
  export type EmailNotificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
    /**
     * Filter which EmailNotification to delete.
     */
    where: EmailNotificationWhereUniqueInput;
  };

  /**
   * EmailNotification deleteMany
   */
  export type EmailNotificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EmailNotifications to delete
     */
    where?: EmailNotificationWhereInput;
    /**
     * Limit how many EmailNotifications to delete.
     */
    limit?: number;
  };

  /**
   * EmailNotification without action
   */
  export type EmailNotificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null;
  };

  /**
   * Model EmailVerification
   */

  export type AggregateEmailVerification = {
    _count: EmailVerificationCountAggregateOutputType | null;
    _min: EmailVerificationMinAggregateOutputType | null;
    _max: EmailVerificationMaxAggregateOutputType | null;
  };

  export type EmailVerificationMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    expiresAt: Date | null;
    contactId: string | null;
    createdAt: Date | null;
    userId: string | null;
  };

  export type EmailVerificationMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    expiresAt: Date | null;
    contactId: string | null;
    createdAt: Date | null;
    userId: string | null;
  };

  export type EmailVerificationCountAggregateOutputType = {
    id: number;
    code: number;
    expiresAt: number;
    contactId: number;
    createdAt: number;
    userId: number;
    _all: number;
  };

  export type EmailVerificationMinAggregateInputType = {
    id?: true;
    code?: true;
    expiresAt?: true;
    contactId?: true;
    createdAt?: true;
    userId?: true;
  };

  export type EmailVerificationMaxAggregateInputType = {
    id?: true;
    code?: true;
    expiresAt?: true;
    contactId?: true;
    createdAt?: true;
    userId?: true;
  };

  export type EmailVerificationCountAggregateInputType = {
    id?: true;
    code?: true;
    expiresAt?: true;
    contactId?: true;
    createdAt?: true;
    userId?: true;
    _all?: true;
  };

  export type EmailVerificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EmailVerification to aggregate.
     */
    where?: EmailVerificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?:
      | EmailVerificationOrderByWithRelationInput
      | EmailVerificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EmailVerificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailVerifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EmailVerifications
     **/
    _count?: true | EmailVerificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmailVerificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmailVerificationMaxAggregateInputType;
  };

  export type GetEmailVerificationAggregateType<
    T extends EmailVerificationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateEmailVerification]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerification[P]>
      : GetScalarType<T[P], AggregateEmailVerification[P]>;
  };

  export type EmailVerificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EmailVerificationWhereInput;
    orderBy?:
      | EmailVerificationOrderByWithAggregationInput
      | EmailVerificationOrderByWithAggregationInput[];
    by: EmailVerificationScalarFieldEnum[] | EmailVerificationScalarFieldEnum;
    having?: EmailVerificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmailVerificationCountAggregateInputType | true;
    _min?: EmailVerificationMinAggregateInputType;
    _max?: EmailVerificationMaxAggregateInputType;
  };

  export type EmailVerificationGroupByOutputType = {
    id: string;
    code: string;
    expiresAt: Date;
    contactId: string;
    createdAt: Date;
    userId: string;
    _count: EmailVerificationCountAggregateOutputType | null;
    _min: EmailVerificationMinAggregateOutputType | null;
    _max: EmailVerificationMaxAggregateOutputType | null;
  };

  type GetEmailVerificationGroupByPayload<
    T extends EmailVerificationGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof EmailVerificationGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
          : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>;
      }
    >
  >;

  export type EmailVerificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      expiresAt?: boolean;
      contactId?: boolean;
      createdAt?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["emailVerification"]
  >;

  export type EmailVerificationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      expiresAt?: boolean;
      contactId?: boolean;
      createdAt?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["emailVerification"]
  >;

  export type EmailVerificationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      expiresAt?: boolean;
      contactId?: boolean;
      createdAt?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["emailVerification"]
  >;

  export type EmailVerificationSelectScalar = {
    id?: boolean;
    code?: boolean;
    expiresAt?: boolean;
    contactId?: boolean;
    createdAt?: boolean;
    userId?: boolean;
  };

  export type EmailVerificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "code" | "expiresAt" | "contactId" | "createdAt" | "userId",
    ExtArgs["result"]["emailVerification"]
  >;
  export type EmailVerificationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type EmailVerificationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type EmailVerificationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $EmailVerificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "EmailVerification";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        code: string;
        expiresAt: Date;
        contactId: string;
        createdAt: Date;
        userId: string;
      },
      ExtArgs["result"]["emailVerification"]
    >;
    composites: {};
  };

  type EmailVerificationGetPayload<
    S extends boolean | null | undefined | EmailVerificationDefaultArgs,
  > = $Result.GetResult<Prisma.$EmailVerificationPayload, S>;

  type EmailVerificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    EmailVerificationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: EmailVerificationCountAggregateInputType | true;
  };

  export interface EmailVerificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["EmailVerification"];
      meta: { name: "EmailVerification" };
    };
    /**
     * Find zero or one EmailVerification that matches the filter.
     * @param {EmailVerificationFindUniqueArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationFindUniqueArgs>(
      args: SelectSubset<T, EmailVerificationFindUniqueArgs<ExtArgs>>,
    ): Prisma__EmailVerificationClient<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one EmailVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationFindUniqueOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EmailVerificationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EmailVerificationClient<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first EmailVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationFindFirstArgs>(
      args?: SelectSubset<T, EmailVerificationFindFirstArgs<ExtArgs>>,
    ): Prisma__EmailVerificationClient<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first EmailVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmailVerificationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EmailVerificationClient<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more EmailVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany()
     *
     * // Get first 10 EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EmailVerificationFindManyArgs>(
      args?: SelectSubset<T, EmailVerificationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a EmailVerification.
     * @param {EmailVerificationCreateArgs} args - Arguments to create a EmailVerification.
     * @example
     * // Create one EmailVerification
     * const EmailVerification = await prisma.emailVerification.create({
     *   data: {
     *     // ... data to create a EmailVerification
     *   }
     * })
     *
     */
    create<T extends EmailVerificationCreateArgs>(
      args: SelectSubset<T, EmailVerificationCreateArgs<ExtArgs>>,
    ): Prisma__EmailVerificationClient<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many EmailVerifications.
     * @param {EmailVerificationCreateManyArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EmailVerificationCreateManyArgs>(
      args?: SelectSubset<T, EmailVerificationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many EmailVerifications and returns the data saved in the database.
     * @param {EmailVerificationCreateManyAndReturnArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EmailVerificationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, EmailVerificationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a EmailVerification.
     * @param {EmailVerificationDeleteArgs} args - Arguments to delete one EmailVerification.
     * @example
     * // Delete one EmailVerification
     * const EmailVerification = await prisma.emailVerification.delete({
     *   where: {
     *     // ... filter to delete one EmailVerification
     *   }
     * })
     *
     */
    delete<T extends EmailVerificationDeleteArgs>(
      args: SelectSubset<T, EmailVerificationDeleteArgs<ExtArgs>>,
    ): Prisma__EmailVerificationClient<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one EmailVerification.
     * @param {EmailVerificationUpdateArgs} args - Arguments to update one EmailVerification.
     * @example
     * // Update one EmailVerification
     * const emailVerification = await prisma.emailVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EmailVerificationUpdateArgs>(
      args: SelectSubset<T, EmailVerificationUpdateArgs<ExtArgs>>,
    ): Prisma__EmailVerificationClient<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more EmailVerifications.
     * @param {EmailVerificationDeleteManyArgs} args - Arguments to filter EmailVerifications to delete.
     * @example
     * // Delete a few EmailVerifications
     * const { count } = await prisma.emailVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EmailVerificationDeleteManyArgs>(
      args?: SelectSubset<T, EmailVerificationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EmailVerificationUpdateManyArgs>(
      args: SelectSubset<T, EmailVerificationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EmailVerifications and returns the data updated in the database.
     * @param {EmailVerificationUpdateManyAndReturnArgs} args - Arguments to update many EmailVerifications.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailVerificationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EmailVerificationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one EmailVerification.
     * @param {EmailVerificationUpsertArgs} args - Arguments to update or create a EmailVerification.
     * @example
     * // Update or create a EmailVerification
     * const emailVerification = await prisma.emailVerification.upsert({
     *   create: {
     *     // ... data to create a EmailVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerification we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationUpsertArgs>(
      args: SelectSubset<T, EmailVerificationUpsertArgs<ExtArgs>>,
    ): Prisma__EmailVerificationClient<
      $Result.GetResult<
        Prisma.$EmailVerificationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCountArgs} args - Arguments to filter EmailVerifications to count.
     * @example
     * // Count the number of EmailVerifications
     * const count = await prisma.emailVerification.count({
     *   where: {
     *     // ... the filter for the EmailVerifications we want to count
     *   }
     * })
     **/
    count<T extends EmailVerificationCountArgs>(
      args?: Subset<T, EmailVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              EmailVerificationCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailVerificationAggregateArgs>(
      args: Subset<T, EmailVerificationAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmailVerificationAggregateType<T>>;

    /**
     * Group by EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationGroupByArgs} args - Group by arguments.
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
      T extends EmailVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationGroupByArgs["orderBy"] }
        : { orderBy?: EmailVerificationGroupByArgs["orderBy"] },
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
      args: SubsetIntersection<T, EmailVerificationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetEmailVerificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EmailVerification model
     */
    readonly fields: EmailVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
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
        | null,
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
        | null,
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
   * Fields of the EmailVerification model
   */
  interface EmailVerificationFieldRefs {
    readonly id: FieldRef<"EmailVerification", "String">;
    readonly code: FieldRef<"EmailVerification", "String">;
    readonly expiresAt: FieldRef<"EmailVerification", "DateTime">;
    readonly contactId: FieldRef<"EmailVerification", "String">;
    readonly createdAt: FieldRef<"EmailVerification", "DateTime">;
    readonly userId: FieldRef<"EmailVerification", "String">;
  }

  // Custom InputTypes
  /**
   * EmailVerification findUnique
   */
  export type EmailVerificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput;
  };

  /**
   * EmailVerification findUniqueOrThrow
   */
  export type EmailVerificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput;
  };

  /**
   * EmailVerification findFirst
   */
  export type EmailVerificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?:
      | EmailVerificationOrderByWithRelationInput
      | EmailVerificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailVerifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?:
      | EmailVerificationScalarFieldEnum
      | EmailVerificationScalarFieldEnum[];
  };

  /**
   * EmailVerification findFirstOrThrow
   */
  export type EmailVerificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?:
      | EmailVerificationOrderByWithRelationInput
      | EmailVerificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailVerifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?:
      | EmailVerificationScalarFieldEnum
      | EmailVerificationScalarFieldEnum[];
  };

  /**
   * EmailVerification findMany
   */
  export type EmailVerificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where?: EmailVerificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?:
      | EmailVerificationOrderByWithRelationInput
      | EmailVerificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailVerifications.
     */
    skip?: number;
    distinct?:
      | EmailVerificationScalarFieldEnum
      | EmailVerificationScalarFieldEnum[];
  };

  /**
   * EmailVerification create
   */
  export type EmailVerificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    /**
     * The data needed to create a EmailVerification.
     */
    data: XOR<
      EmailVerificationCreateInput,
      EmailVerificationUncheckedCreateInput
    >;
  };

  /**
   * EmailVerification createMany
   */
  export type EmailVerificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EmailVerification createManyAndReturn
   */
  export type EmailVerificationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * EmailVerification update
   */
  export type EmailVerificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    /**
     * The data needed to update a EmailVerification.
     */
    data: XOR<
      EmailVerificationUpdateInput,
      EmailVerificationUncheckedUpdateInput
    >;
    /**
     * Choose, which EmailVerification to update.
     */
    where: EmailVerificationWhereUniqueInput;
  };

  /**
   * EmailVerification updateMany
   */
  export type EmailVerificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<
      EmailVerificationUpdateManyMutationInput,
      EmailVerificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput;
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number;
  };

  /**
   * EmailVerification updateManyAndReturn
   */
  export type EmailVerificationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<
      EmailVerificationUpdateManyMutationInput,
      EmailVerificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput;
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * EmailVerification upsert
   */
  export type EmailVerificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    /**
     * The filter to search for the EmailVerification to update in case it exists.
     */
    where: EmailVerificationWhereUniqueInput;
    /**
     * In case the EmailVerification found by the `where` argument doesn't exist, create a new EmailVerification with this data.
     */
    create: XOR<
      EmailVerificationCreateInput,
      EmailVerificationUncheckedCreateInput
    >;
    /**
     * In case the EmailVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      EmailVerificationUpdateInput,
      EmailVerificationUncheckedUpdateInput
    >;
  };

  /**
   * EmailVerification delete
   */
  export type EmailVerificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
    /**
     * Filter which EmailVerification to delete.
     */
    where: EmailVerificationWhereUniqueInput;
  };

  /**
   * EmailVerification deleteMany
   */
  export type EmailVerificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EmailVerifications to delete
     */
    where?: EmailVerificationWhereInput;
    /**
     * Limit how many EmailVerifications to delete.
     */
    limit?: number;
  };

  /**
   * EmailVerification without action
   */
  export type EmailVerificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null;
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
    password: "password";
    image: "image";
    provider: "provider";
    providerId: "providerId";
    plan: "plan";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const InteractionScalarFieldEnum: {
    id: "id";
    userId: "userId";
    input: "input";
    response: "response";
    timestamp: "timestamp";
    context: "context";
  };

  export type InteractionScalarFieldEnum =
    (typeof InteractionScalarFieldEnum)[keyof typeof InteractionScalarFieldEnum];

  export const UserPreferenceScalarFieldEnum: {
    id: "id";
    userId: "userId";
    language: "language";
    theme: "theme";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserPreferenceScalarFieldEnum =
    (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    id: "id";
    userId: "userId";
    externalId: "externalId";
    status: "status";
    amount: "amount";
    paymentMethod: "paymentMethod";
    paymentMethodId: "paymentMethodId";
    paymentProvider: "paymentProvider";
    paymentUrl: "paymentUrl";
    transactionDetails: "transactionDetails";
    notificationSent: "notificationSent";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type PaymentScalarFieldEnum =
    (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const EmailNotificationScalarFieldEnum: {
    id: "id";
    recipient: "recipient";
    subject: "subject";
    content: "content";
    status: "status";
    sentAt: "sentAt";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type EmailNotificationScalarFieldEnum =
    (typeof EmailNotificationScalarFieldEnum)[keyof typeof EmailNotificationScalarFieldEnum];

  export const EmailVerificationScalarFieldEnum: {
    id: "id";
    code: "code";
    expiresAt: "expiresAt";
    contactId: "contactId";
    createdAt: "createdAt";
    userId: "userId";
  };

  export type EmailVerificationScalarFieldEnum =
    (typeof EmailVerificationScalarFieldEnum)[keyof typeof EmailVerificationScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

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

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

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
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Provider"
  >;

  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Provider[]"
  >;

  /**
   * Reference to a field of type 'Plan'
   */
  export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Plan"
  >;

  /**
   * Reference to a field of type 'Plan[]'
   */
  export type ListEnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Plan[]"
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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "QueryMode"
  >;

  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "PaymentStatus"
  >;

  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "PaymentStatus[]">;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Decimal"
  >;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Decimal[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'EmailStatus'
   */
  export type EnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "EmailStatus"
  >;

  /**
   * Reference to a field of type 'EmailStatus[]'
   */
  export type ListEnumEmailStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "EmailStatus[]">;

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
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    password?: StringFilter<"User"> | string;
    image?: StringNullableFilter<"User"> | string | null;
    provider?: EnumProviderFilter<"User"> | $Enums.Provider;
    providerId?: StringNullableFilter<"User"> | string | null;
    plan?: EnumPlanFilter<"User"> | $Enums.Plan;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    interactions?: InteractionListRelationFilter;
    preferences?: UserPreferenceListRelationFilter;
    payments?: PaymentListRelationFilter;
    emailVerifications?: EmailVerificationListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    image?: SortOrderInput | SortOrder;
    provider?: SortOrder;
    providerId?: SortOrderInput | SortOrder;
    plan?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    interactions?: InteractionOrderByRelationAggregateInput;
    preferences?: UserPreferenceOrderByRelationAggregateInput;
    payments?: PaymentOrderByRelationAggregateInput;
    emailVerifications?: EmailVerificationOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      provider_providerId?: UserProviderProviderIdCompoundUniqueInput;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<"User"> | string;
      password?: StringFilter<"User"> | string;
      image?: StringNullableFilter<"User"> | string | null;
      provider?: EnumProviderFilter<"User"> | $Enums.Provider;
      providerId?: StringNullableFilter<"User"> | string | null;
      plan?: EnumPlanFilter<"User"> | $Enums.Plan;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      interactions?: InteractionListRelationFilter;
      preferences?: UserPreferenceListRelationFilter;
      payments?: PaymentListRelationFilter;
      emailVerifications?: EmailVerificationListRelationFilter;
    },
    "id" | "email" | "provider_providerId"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    image?: SortOrderInput | SortOrder;
    provider?: SortOrder;
    providerId?: SortOrderInput | SortOrder;
    plan?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
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
    password?: StringWithAggregatesFilter<"User"> | string;
    image?: StringNullableWithAggregatesFilter<"User"> | string | null;
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider;
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null;
    plan?: EnumPlanWithAggregatesFilter<"User"> | $Enums.Plan;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type InteractionWhereInput = {
    AND?: InteractionWhereInput | InteractionWhereInput[];
    OR?: InteractionWhereInput[];
    NOT?: InteractionWhereInput | InteractionWhereInput[];
    id?: StringFilter<"Interaction"> | string;
    userId?: StringFilter<"Interaction"> | string;
    input?: StringFilter<"Interaction"> | string;
    response?: StringFilter<"Interaction"> | string;
    timestamp?: DateTimeFilter<"Interaction"> | Date | string;
    context?: JsonNullableFilter<"Interaction">;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type InteractionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    input?: SortOrder;
    response?: SortOrder;
    timestamp?: SortOrder;
    context?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type InteractionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: InteractionWhereInput | InteractionWhereInput[];
      OR?: InteractionWhereInput[];
      NOT?: InteractionWhereInput | InteractionWhereInput[];
      userId?: StringFilter<"Interaction"> | string;
      input?: StringFilter<"Interaction"> | string;
      response?: StringFilter<"Interaction"> | string;
      timestamp?: DateTimeFilter<"Interaction"> | Date | string;
      context?: JsonNullableFilter<"Interaction">;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type InteractionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    input?: SortOrder;
    response?: SortOrder;
    timestamp?: SortOrder;
    context?: SortOrderInput | SortOrder;
    _count?: InteractionCountOrderByAggregateInput;
    _max?: InteractionMaxOrderByAggregateInput;
    _min?: InteractionMinOrderByAggregateInput;
  };

  export type InteractionScalarWhereWithAggregatesInput = {
    AND?:
      | InteractionScalarWhereWithAggregatesInput
      | InteractionScalarWhereWithAggregatesInput[];
    OR?: InteractionScalarWhereWithAggregatesInput[];
    NOT?:
      | InteractionScalarWhereWithAggregatesInput
      | InteractionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Interaction"> | string;
    userId?: StringWithAggregatesFilter<"Interaction"> | string;
    input?: StringWithAggregatesFilter<"Interaction"> | string;
    response?: StringWithAggregatesFilter<"Interaction"> | string;
    timestamp?: DateTimeWithAggregatesFilter<"Interaction"> | Date | string;
    context?: JsonNullableWithAggregatesFilter<"Interaction">;
  };

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[];
    OR?: UserPreferenceWhereInput[];
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[];
    id?: StringFilter<"UserPreference"> | string;
    userId?: StringFilter<"UserPreference"> | string;
    language?: StringFilter<"UserPreference"> | string;
    theme?: StringNullableFilter<"UserPreference"> | string | null;
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string;
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    language?: SortOrder;
    theme?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[];
      OR?: UserPreferenceWhereInput[];
      NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[];
      language?: StringFilter<"UserPreference"> | string;
      theme?: StringNullableFilter<"UserPreference"> | string | null;
      createdAt?: DateTimeFilter<"UserPreference"> | Date | string;
      updatedAt?: DateTimeFilter<"UserPreference"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "userId"
  >;

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    language?: SortOrder;
    theme?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserPreferenceCountOrderByAggregateInput;
    _max?: UserPreferenceMaxOrderByAggregateInput;
    _min?: UserPreferenceMinOrderByAggregateInput;
  };

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?:
      | UserPreferenceScalarWhereWithAggregatesInput
      | UserPreferenceScalarWhereWithAggregatesInput[];
    OR?: UserPreferenceScalarWhereWithAggregatesInput[];
    NOT?:
      | UserPreferenceScalarWhereWithAggregatesInput
      | UserPreferenceScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"UserPreference"> | string;
    userId?: StringWithAggregatesFilter<"UserPreference"> | string;
    language?: StringWithAggregatesFilter<"UserPreference"> | string;
    theme?:
      | StringNullableWithAggregatesFilter<"UserPreference">
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string;
  };

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[];
    OR?: PaymentWhereInput[];
    NOT?: PaymentWhereInput | PaymentWhereInput[];
    id?: StringFilter<"Payment"> | string;
    userId?: StringFilter<"Payment"> | string;
    externalId?: StringNullableFilter<"Payment"> | string | null;
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    amount?:
      | DecimalFilter<"Payment">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?: StringNullableFilter<"Payment"> | string | null;
    paymentMethodId?: StringNullableFilter<"Payment"> | string | null;
    paymentProvider?: StringFilter<"Payment"> | string;
    paymentUrl?: StringNullableFilter<"Payment"> | string | null;
    transactionDetails?: JsonNullableFilter<"Payment">;
    notificationSent?: BoolFilter<"Payment"> | boolean;
    createdAt?: DateTimeFilter<"Payment"> | Date | string;
    updatedAt?: DateTimeFilter<"Payment"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    externalId?: SortOrderInput | SortOrder;
    status?: SortOrder;
    amount?: SortOrder;
    paymentMethod?: SortOrderInput | SortOrder;
    paymentMethodId?: SortOrderInput | SortOrder;
    paymentProvider?: SortOrder;
    paymentUrl?: SortOrderInput | SortOrder;
    transactionDetails?: SortOrderInput | SortOrder;
    notificationSent?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type PaymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: PaymentWhereInput | PaymentWhereInput[];
      OR?: PaymentWhereInput[];
      NOT?: PaymentWhereInput | PaymentWhereInput[];
      userId?: StringFilter<"Payment"> | string;
      externalId?: StringNullableFilter<"Payment"> | string | null;
      status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
      amount?:
        | DecimalFilter<"Payment">
        | Decimal
        | DecimalJsLike
        | number
        | string;
      paymentMethod?: StringNullableFilter<"Payment"> | string | null;
      paymentMethodId?: StringNullableFilter<"Payment"> | string | null;
      paymentProvider?: StringFilter<"Payment"> | string;
      paymentUrl?: StringNullableFilter<"Payment"> | string | null;
      transactionDetails?: JsonNullableFilter<"Payment">;
      notificationSent?: BoolFilter<"Payment"> | boolean;
      createdAt?: DateTimeFilter<"Payment"> | Date | string;
      updatedAt?: DateTimeFilter<"Payment"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    externalId?: SortOrderInput | SortOrder;
    status?: SortOrder;
    amount?: SortOrder;
    paymentMethod?: SortOrderInput | SortOrder;
    paymentMethodId?: SortOrderInput | SortOrder;
    paymentProvider?: SortOrder;
    paymentUrl?: SortOrderInput | SortOrder;
    transactionDetails?: SortOrderInput | SortOrder;
    notificationSent?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PaymentCountOrderByAggregateInput;
    _avg?: PaymentAvgOrderByAggregateInput;
    _max?: PaymentMaxOrderByAggregateInput;
    _min?: PaymentMinOrderByAggregateInput;
    _sum?: PaymentSumOrderByAggregateInput;
  };

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    OR?: PaymentScalarWhereWithAggregatesInput[];
    NOT?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Payment"> | string;
    userId?: StringWithAggregatesFilter<"Payment"> | string;
    externalId?: StringNullableWithAggregatesFilter<"Payment"> | string | null;
    status?:
      | EnumPaymentStatusWithAggregatesFilter<"Payment">
      | $Enums.PaymentStatus;
    amount?:
      | DecimalWithAggregatesFilter<"Payment">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?:
      | StringNullableWithAggregatesFilter<"Payment">
      | string
      | null;
    paymentMethodId?:
      | StringNullableWithAggregatesFilter<"Payment">
      | string
      | null;
    paymentProvider?: StringWithAggregatesFilter<"Payment"> | string;
    paymentUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null;
    transactionDetails?: JsonNullableWithAggregatesFilter<"Payment">;
    notificationSent?: BoolWithAggregatesFilter<"Payment"> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string;
  };

  export type EmailNotificationWhereInput = {
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[];
    OR?: EmailNotificationWhereInput[];
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[];
    id?: StringFilter<"EmailNotification"> | string;
    recipient?: StringFilter<"EmailNotification"> | string;
    subject?: StringFilter<"EmailNotification"> | string;
    content?: StringFilter<"EmailNotification"> | string;
    status?: EnumEmailStatusFilter<"EmailNotification"> | $Enums.EmailStatus;
    sentAt?: DateTimeNullableFilter<"EmailNotification"> | Date | string | null;
    createdAt?: DateTimeFilter<"EmailNotification"> | Date | string;
    updatedAt?: DateTimeFilter<"EmailNotification"> | Date | string;
  };

  export type EmailNotificationOrderByWithRelationInput = {
    id?: SortOrder;
    recipient?: SortOrder;
    subject?: SortOrder;
    content?: SortOrder;
    status?: SortOrder;
    sentAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EmailNotificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[];
      OR?: EmailNotificationWhereInput[];
      NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[];
      recipient?: StringFilter<"EmailNotification"> | string;
      subject?: StringFilter<"EmailNotification"> | string;
      content?: StringFilter<"EmailNotification"> | string;
      status?: EnumEmailStatusFilter<"EmailNotification"> | $Enums.EmailStatus;
      sentAt?:
        | DateTimeNullableFilter<"EmailNotification">
        | Date
        | string
        | null;
      createdAt?: DateTimeFilter<"EmailNotification"> | Date | string;
      updatedAt?: DateTimeFilter<"EmailNotification"> | Date | string;
    },
    "id"
  >;

  export type EmailNotificationOrderByWithAggregationInput = {
    id?: SortOrder;
    recipient?: SortOrder;
    subject?: SortOrder;
    content?: SortOrder;
    status?: SortOrder;
    sentAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: EmailNotificationCountOrderByAggregateInput;
    _max?: EmailNotificationMaxOrderByAggregateInput;
    _min?: EmailNotificationMinOrderByAggregateInput;
  };

  export type EmailNotificationScalarWhereWithAggregatesInput = {
    AND?:
      | EmailNotificationScalarWhereWithAggregatesInput
      | EmailNotificationScalarWhereWithAggregatesInput[];
    OR?: EmailNotificationScalarWhereWithAggregatesInput[];
    NOT?:
      | EmailNotificationScalarWhereWithAggregatesInput
      | EmailNotificationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"EmailNotification"> | string;
    recipient?: StringWithAggregatesFilter<"EmailNotification"> | string;
    subject?: StringWithAggregatesFilter<"EmailNotification"> | string;
    content?: StringWithAggregatesFilter<"EmailNotification"> | string;
    status?:
      | EnumEmailStatusWithAggregatesFilter<"EmailNotification">
      | $Enums.EmailStatus;
    sentAt?:
      | DateTimeNullableWithAggregatesFilter<"EmailNotification">
      | Date
      | string
      | null;
    createdAt?:
      | DateTimeWithAggregatesFilter<"EmailNotification">
      | Date
      | string;
    updatedAt?:
      | DateTimeWithAggregatesFilter<"EmailNotification">
      | Date
      | string;
  };

  export type EmailVerificationWhereInput = {
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[];
    OR?: EmailVerificationWhereInput[];
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[];
    id?: StringFilter<"EmailVerification"> | string;
    code?: StringFilter<"EmailVerification"> | string;
    expiresAt?: DateTimeFilter<"EmailVerification"> | Date | string;
    contactId?: StringFilter<"EmailVerification"> | string;
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string;
    userId?: StringFilter<"EmailVerification"> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type EmailVerificationOrderByWithRelationInput = {
    id?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    contactId?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type EmailVerificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[];
      OR?: EmailVerificationWhereInput[];
      NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[];
      code?: StringFilter<"EmailVerification"> | string;
      expiresAt?: DateTimeFilter<"EmailVerification"> | Date | string;
      contactId?: StringFilter<"EmailVerification"> | string;
      createdAt?: DateTimeFilter<"EmailVerification"> | Date | string;
      userId?: StringFilter<"EmailVerification"> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type EmailVerificationOrderByWithAggregationInput = {
    id?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    contactId?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
    _count?: EmailVerificationCountOrderByAggregateInput;
    _max?: EmailVerificationMaxOrderByAggregateInput;
    _min?: EmailVerificationMinOrderByAggregateInput;
  };

  export type EmailVerificationScalarWhereWithAggregatesInput = {
    AND?:
      | EmailVerificationScalarWhereWithAggregatesInput
      | EmailVerificationScalarWhereWithAggregatesInput[];
    OR?: EmailVerificationScalarWhereWithAggregatesInput[];
    NOT?:
      | EmailVerificationScalarWhereWithAggregatesInput
      | EmailVerificationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"EmailVerification"> | string;
    code?: StringWithAggregatesFilter<"EmailVerification"> | string;
    expiresAt?:
      | DateTimeWithAggregatesFilter<"EmailVerification">
      | Date
      | string;
    contactId?: StringWithAggregatesFilter<"EmailVerification"> | string;
    createdAt?:
      | DateTimeWithAggregatesFilter<"EmailVerification">
      | Date
      | string;
    userId?: StringWithAggregatesFilter<"EmailVerification"> | string;
  };

  export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interactions?: InteractionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput;
    payments?: PaymentCreateNestedManyWithoutUserInput;
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput;
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput;
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: InteractionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput;
    payments?: PaymentUpdateManyWithoutUserNestedInput;
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput;
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InteractionCreateInput = {
    id?: string;
    input: string;
    response: string;
    timestamp?: Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
    user: UserCreateNestedOneWithoutInteractionsInput;
  };

  export type InteractionUncheckedCreateInput = {
    id?: string;
    userId: string;
    input: string;
    response: string;
    timestamp?: Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput;
  };

  export type InteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InteractionCreateManyInput = {
    id?: string;
    userId: string;
    input: string;
    response: string;
    timestamp?: Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type UserPreferenceCreateInput = {
    id?: string;
    language: string;
    theme?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPreferencesInput;
  };

  export type UserPreferenceUncheckedCreateInput = {
    id?: string;
    userId: string;
    language: string;
    theme?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput;
  };

  export type UserPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserPreferenceCreateManyInput = {
    id?: string;
    userId: string;
    language: string;
    theme?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentCreateInput = {
    id?: string;
    externalId?: string | null;
    status?: $Enums.PaymentStatus;
    amount: Decimal | DecimalJsLike | number | string;
    paymentMethod?: string | null;
    paymentMethodId?: string | null;
    paymentProvider?: string;
    paymentUrl?: string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPaymentsInput;
  };

  export type PaymentUncheckedCreateInput = {
    id?: string;
    userId: string;
    externalId?: string | null;
    status?: $Enums.PaymentStatus;
    amount: Decimal | DecimalJsLike | number | string;
    paymentMethod?: string | null;
    paymentMethodId?: string | null;
    paymentProvider?: string;
    paymentUrl?: string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    externalId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentProvider?: StringFieldUpdateOperationsInput | string;
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput;
  };

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    externalId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentProvider?: StringFieldUpdateOperationsInput | string;
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentCreateManyInput = {
    id?: string;
    userId: string;
    externalId?: string | null;
    status?: $Enums.PaymentStatus;
    amount: Decimal | DecimalJsLike | number | string;
    paymentMethod?: string | null;
    paymentMethodId?: string | null;
    paymentProvider?: string;
    paymentUrl?: string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    externalId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentProvider?: StringFieldUpdateOperationsInput | string;
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    externalId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentProvider?: StringFieldUpdateOperationsInput | string;
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmailNotificationCreateInput = {
    id?: string;
    recipient: string;
    subject: string;
    content: string;
    status?: $Enums.EmailStatus;
    sentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EmailNotificationUncheckedCreateInput = {
    id?: string;
    recipient: string;
    subject: string;
    content: string;
    status?: $Enums.EmailStatus;
    sentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EmailNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    recipient?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmailNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    recipient?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmailNotificationCreateManyInput = {
    id?: string;
    recipient: string;
    subject: string;
    content: string;
    status?: $Enums.EmailStatus;
    sentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EmailNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    recipient?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmailNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    recipient?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmailVerificationCreateInput = {
    id?: string;
    code: string;
    expiresAt: Date | string;
    contactId: string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutEmailVerificationsInput;
  };

  export type EmailVerificationUncheckedCreateInput = {
    id?: string;
    code: string;
    expiresAt: Date | string;
    contactId: string;
    createdAt?: Date | string;
    userId: string;
  };

  export type EmailVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    contactId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutEmailVerificationsNestedInput;
  };

  export type EmailVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    contactId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type EmailVerificationCreateManyInput = {
    id?: string;
    code: string;
    expiresAt: Date | string;
    contactId: string;
    createdAt?: Date | string;
    userId: string;
  };

  export type EmailVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    contactId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmailVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    contactId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider;
  };

  export type EnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>;
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan;
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

  export type InteractionListRelationFilter = {
    every?: InteractionWhereInput;
    some?: InteractionWhereInput;
    none?: InteractionWhereInput;
  };

  export type UserPreferenceListRelationFilter = {
    every?: UserPreferenceWhereInput;
    some?: UserPreferenceWhereInput;
    none?: UserPreferenceWhereInput;
  };

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput;
    some?: PaymentWhereInput;
    none?: PaymentWhereInput;
  };

  export type EmailVerificationListRelationFilter = {
    every?: EmailVerificationWhereInput;
    some?: EmailVerificationWhereInput;
    none?: EmailVerificationWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type InteractionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type EmailVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserProviderProviderIdCompoundUniqueInput = {
    provider: $Enums.Provider;
    providerId: string;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    image?: SortOrder;
    provider?: SortOrder;
    providerId?: SortOrder;
    plan?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    image?: SortOrder;
    provider?: SortOrder;
    providerId?: SortOrder;
    plan?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    image?: SortOrder;
    provider?: SortOrder;
    providerId?: SortOrder;
    plan?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProviderWithAggregatesFilter<$PrismaModel>
      | $Enums.Provider;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProviderFilter<$PrismaModel>;
    _max?: NestedEnumProviderFilter<$PrismaModel>;
  };

  export type EnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>;
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPlanFilter<$PrismaModel>;
    _max?: NestedEnumPlanFilter<$PrismaModel>;
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type InteractionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    input?: SortOrder;
    response?: SortOrder;
    timestamp?: SortOrder;
    context?: SortOrder;
  };

  export type InteractionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    input?: SortOrder;
    response?: SortOrder;
    timestamp?: SortOrder;
  };

  export type InteractionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    input?: SortOrder;
    response?: SortOrder;
    timestamp?: SortOrder;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          "path"
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    language?: SortOrder;
    theme?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    language?: SortOrder;
    theme?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    language?: SortOrder;
    theme?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    externalId?: SortOrder;
    status?: SortOrder;
    amount?: SortOrder;
    paymentMethod?: SortOrder;
    paymentMethodId?: SortOrder;
    paymentProvider?: SortOrder;
    paymentUrl?: SortOrder;
    transactionDetails?: SortOrder;
    notificationSent?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    externalId?: SortOrder;
    status?: SortOrder;
    amount?: SortOrder;
    paymentMethod?: SortOrder;
    paymentMethodId?: SortOrder;
    paymentProvider?: SortOrder;
    paymentUrl?: SortOrder;
    notificationSent?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    externalId?: SortOrder;
    status?: SortOrder;
    amount?: SortOrder;
    paymentMethod?: SortOrder;
    paymentMethodId?: SortOrder;
    paymentProvider?: SortOrder;
    paymentUrl?: SortOrder;
    notificationSent?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EmailStatus[]
      | ListEnumEmailStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type EmailNotificationCountOrderByAggregateInput = {
    id?: SortOrder;
    recipient?: SortOrder;
    subject?: SortOrder;
    content?: SortOrder;
    status?: SortOrder;
    sentAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EmailNotificationMaxOrderByAggregateInput = {
    id?: SortOrder;
    recipient?: SortOrder;
    subject?: SortOrder;
    content?: SortOrder;
    status?: SortOrder;
    sentAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EmailNotificationMinOrderByAggregateInput = {
    id?: SortOrder;
    recipient?: SortOrder;
    subject?: SortOrder;
    content?: SortOrder;
    status?: SortOrder;
    sentAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EmailStatus[]
      | ListEnumEmailStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.EmailStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>;
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type EmailVerificationCountOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    contactId?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
  };

  export type EmailVerificationMaxOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    contactId?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
  };

  export type EmailVerificationMinOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    contactId?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
  };

  export type InteractionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          InteractionCreateWithoutUserInput,
          InteractionUncheckedCreateWithoutUserInput
        >
      | InteractionCreateWithoutUserInput[]
      | InteractionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | InteractionCreateOrConnectWithoutUserInput
      | InteractionCreateOrConnectWithoutUserInput[];
    createMany?: InteractionCreateManyUserInputEnvelope;
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
  };

  export type UserPreferenceCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserPreferenceCreateWithoutUserInput,
          UserPreferenceUncheckedCreateWithoutUserInput
        >
      | UserPreferenceCreateWithoutUserInput[]
      | UserPreferenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserPreferenceCreateOrConnectWithoutUserInput
      | UserPreferenceCreateOrConnectWithoutUserInput[];
    createMany?: UserPreferenceCreateManyUserInputEnvelope;
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[];
  };

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PaymentCreateWithoutUserInput,
          PaymentUncheckedCreateWithoutUserInput
        >
      | PaymentCreateWithoutUserInput[]
      | PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutUserInput
      | PaymentCreateOrConnectWithoutUserInput[];
    createMany?: PaymentCreateManyUserInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type EmailVerificationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          EmailVerificationCreateWithoutUserInput,
          EmailVerificationUncheckedCreateWithoutUserInput
        >
      | EmailVerificationCreateWithoutUserInput[]
      | EmailVerificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | EmailVerificationCreateOrConnectWithoutUserInput
      | EmailVerificationCreateOrConnectWithoutUserInput[];
    createMany?: EmailVerificationCreateManyUserInputEnvelope;
    connect?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
  };

  export type InteractionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          InteractionCreateWithoutUserInput,
          InteractionUncheckedCreateWithoutUserInput
        >
      | InteractionCreateWithoutUserInput[]
      | InteractionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | InteractionCreateOrConnectWithoutUserInput
      | InteractionCreateOrConnectWithoutUserInput[];
    createMany?: InteractionCreateManyUserInputEnvelope;
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
  };

  export type UserPreferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserPreferenceCreateWithoutUserInput,
          UserPreferenceUncheckedCreateWithoutUserInput
        >
      | UserPreferenceCreateWithoutUserInput[]
      | UserPreferenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserPreferenceCreateOrConnectWithoutUserInput
      | UserPreferenceCreateOrConnectWithoutUserInput[];
    createMany?: UserPreferenceCreateManyUserInputEnvelope;
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[];
  };

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PaymentCreateWithoutUserInput,
          PaymentUncheckedCreateWithoutUserInput
        >
      | PaymentCreateWithoutUserInput[]
      | PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutUserInput
      | PaymentCreateOrConnectWithoutUserInput[];
    createMany?: PaymentCreateManyUserInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type EmailVerificationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          EmailVerificationCreateWithoutUserInput,
          EmailVerificationUncheckedCreateWithoutUserInput
        >
      | EmailVerificationCreateWithoutUserInput[]
      | EmailVerificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | EmailVerificationCreateOrConnectWithoutUserInput
      | EmailVerificationCreateOrConnectWithoutUserInput[];
    createMany?: EmailVerificationCreateManyUserInputEnvelope;
    connect?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider;
  };

  export type EnumPlanFieldUpdateOperationsInput = {
    set?: $Enums.Plan;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type InteractionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          InteractionCreateWithoutUserInput,
          InteractionUncheckedCreateWithoutUserInput
        >
      | InteractionCreateWithoutUserInput[]
      | InteractionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | InteractionCreateOrConnectWithoutUserInput
      | InteractionCreateOrConnectWithoutUserInput[];
    upsert?:
      | InteractionUpsertWithWhereUniqueWithoutUserInput
      | InteractionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: InteractionCreateManyUserInputEnvelope;
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
    update?:
      | InteractionUpdateWithWhereUniqueWithoutUserInput
      | InteractionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | InteractionUpdateManyWithWhereWithoutUserInput
      | InteractionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[];
  };

  export type UserPreferenceUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserPreferenceCreateWithoutUserInput,
          UserPreferenceUncheckedCreateWithoutUserInput
        >
      | UserPreferenceCreateWithoutUserInput[]
      | UserPreferenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserPreferenceCreateOrConnectWithoutUserInput
      | UserPreferenceCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserPreferenceUpsertWithWhereUniqueWithoutUserInput
      | UserPreferenceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserPreferenceCreateManyUserInputEnvelope;
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[];
    disconnect?:
      | UserPreferenceWhereUniqueInput
      | UserPreferenceWhereUniqueInput[];
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[];
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[];
    update?:
      | UserPreferenceUpdateWithWhereUniqueWithoutUserInput
      | UserPreferenceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserPreferenceUpdateManyWithWhereWithoutUserInput
      | UserPreferenceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserPreferenceScalarWhereInput
      | UserPreferenceScalarWhereInput[];
  };

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutUserInput,
          PaymentUncheckedCreateWithoutUserInput
        >
      | PaymentCreateWithoutUserInput[]
      | PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutUserInput
      | PaymentCreateOrConnectWithoutUserInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutUserInput
      | PaymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PaymentCreateManyUserInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutUserInput
      | PaymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutUserInput
      | PaymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type EmailVerificationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          EmailVerificationCreateWithoutUserInput,
          EmailVerificationUncheckedCreateWithoutUserInput
        >
      | EmailVerificationCreateWithoutUserInput[]
      | EmailVerificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | EmailVerificationCreateOrConnectWithoutUserInput
      | EmailVerificationCreateOrConnectWithoutUserInput[];
    upsert?:
      | EmailVerificationUpsertWithWhereUniqueWithoutUserInput
      | EmailVerificationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: EmailVerificationCreateManyUserInputEnvelope;
    set?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
    disconnect?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
    delete?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
    connect?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
    update?:
      | EmailVerificationUpdateWithWhereUniqueWithoutUserInput
      | EmailVerificationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | EmailVerificationUpdateManyWithWhereWithoutUserInput
      | EmailVerificationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | EmailVerificationScalarWhereInput
      | EmailVerificationScalarWhereInput[];
  };

  export type InteractionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          InteractionCreateWithoutUserInput,
          InteractionUncheckedCreateWithoutUserInput
        >
      | InteractionCreateWithoutUserInput[]
      | InteractionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | InteractionCreateOrConnectWithoutUserInput
      | InteractionCreateOrConnectWithoutUserInput[];
    upsert?:
      | InteractionUpsertWithWhereUniqueWithoutUserInput
      | InteractionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: InteractionCreateManyUserInputEnvelope;
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[];
    update?:
      | InteractionUpdateWithWhereUniqueWithoutUserInput
      | InteractionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | InteractionUpdateManyWithWhereWithoutUserInput
      | InteractionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[];
  };

  export type UserPreferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserPreferenceCreateWithoutUserInput,
          UserPreferenceUncheckedCreateWithoutUserInput
        >
      | UserPreferenceCreateWithoutUserInput[]
      | UserPreferenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserPreferenceCreateOrConnectWithoutUserInput
      | UserPreferenceCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserPreferenceUpsertWithWhereUniqueWithoutUserInput
      | UserPreferenceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserPreferenceCreateManyUserInputEnvelope;
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[];
    disconnect?:
      | UserPreferenceWhereUniqueInput
      | UserPreferenceWhereUniqueInput[];
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[];
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[];
    update?:
      | UserPreferenceUpdateWithWhereUniqueWithoutUserInput
      | UserPreferenceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserPreferenceUpdateManyWithWhereWithoutUserInput
      | UserPreferenceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserPreferenceScalarWhereInput
      | UserPreferenceScalarWhereInput[];
  };

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutUserInput,
          PaymentUncheckedCreateWithoutUserInput
        >
      | PaymentCreateWithoutUserInput[]
      | PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutUserInput
      | PaymentCreateOrConnectWithoutUserInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutUserInput
      | PaymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PaymentCreateManyUserInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutUserInput
      | PaymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutUserInput
      | PaymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type EmailVerificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          EmailVerificationCreateWithoutUserInput,
          EmailVerificationUncheckedCreateWithoutUserInput
        >
      | EmailVerificationCreateWithoutUserInput[]
      | EmailVerificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | EmailVerificationCreateOrConnectWithoutUserInput
      | EmailVerificationCreateOrConnectWithoutUserInput[];
    upsert?:
      | EmailVerificationUpsertWithWhereUniqueWithoutUserInput
      | EmailVerificationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: EmailVerificationCreateManyUserInputEnvelope;
    set?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
    disconnect?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
    delete?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
    connect?:
      | EmailVerificationWhereUniqueInput
      | EmailVerificationWhereUniqueInput[];
    update?:
      | EmailVerificationUpdateWithWhereUniqueWithoutUserInput
      | EmailVerificationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | EmailVerificationUpdateManyWithWhereWithoutUserInput
      | EmailVerificationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | EmailVerificationScalarWhereInput
      | EmailVerificationScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<
      UserCreateWithoutInteractionsInput,
      UserUncheckedCreateWithoutInteractionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<
      UserCreateWithoutInteractionsInput,
      UserUncheckedCreateWithoutInteractionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput;
    upsert?: UserUpsertWithoutInteractionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutInteractionsInput,
        UserUpdateWithoutInteractionsInput
      >,
      UserUncheckedUpdateWithoutInteractionsInput
    >;
  };

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<
      UserCreateWithoutPreferencesInput,
      UserUncheckedCreateWithoutPreferencesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<
      UserCreateWithoutPreferencesInput,
      UserUncheckedCreateWithoutPreferencesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput;
    upsert?: UserUpsertWithoutPreferencesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPreferencesInput,
        UserUpdateWithoutPreferencesInput
      >,
      UserUncheckedUpdateWithoutPreferencesInput
    >;
  };

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<
      UserCreateWithoutPaymentsInput,
      UserUncheckedCreateWithoutPaymentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<
      UserCreateWithoutPaymentsInput,
      UserUncheckedCreateWithoutPaymentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput;
    upsert?: UserUpsertWithoutPaymentsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPaymentsInput,
        UserUpdateWithoutPaymentsInput
      >,
      UserUncheckedUpdateWithoutPaymentsInput
    >;
  };

  export type EnumEmailStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmailStatus;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type UserCreateNestedOneWithoutEmailVerificationsInput = {
    create?: XOR<
      UserCreateWithoutEmailVerificationsInput,
      UserUncheckedCreateWithoutEmailVerificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutEmailVerificationsNestedInput = {
    create?: XOR<
      UserCreateWithoutEmailVerificationsInput,
      UserUncheckedCreateWithoutEmailVerificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationsInput;
    upsert?: UserUpsertWithoutEmailVerificationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutEmailVerificationsInput,
        UserUpdateWithoutEmailVerificationsInput
      >,
      UserUncheckedUpdateWithoutEmailVerificationsInput
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider;
  };

  export type NestedEnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>;
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan;
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
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

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProviderWithAggregatesFilter<$PrismaModel>
      | $Enums.Provider;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProviderFilter<$PrismaModel>;
    _max?: NestedEnumProviderFilter<$PrismaModel>;
  };

  export type NestedEnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>;
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPlanFilter<$PrismaModel>;
    _max?: NestedEnumPlanFilter<$PrismaModel>;
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumPaymentStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EmailStatus[]
      | ListEnumEmailStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.EmailStatus[]
        | ListEnumEmailStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.EmailStatus[]
        | ListEnumEmailStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.EmailStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumEmailStatusFilter<$PrismaModel>;
      _max?: NestedEnumEmailStatusFilter<$PrismaModel>;
    };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type InteractionCreateWithoutUserInput = {
    id?: string;
    input: string;
    response: string;
    timestamp?: Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InteractionUncheckedCreateWithoutUserInput = {
    id?: string;
    input: string;
    response: string;
    timestamp?: Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InteractionCreateOrConnectWithoutUserInput = {
    where: InteractionWhereUniqueInput;
    create: XOR<
      InteractionCreateWithoutUserInput,
      InteractionUncheckedCreateWithoutUserInput
    >;
  };

  export type InteractionCreateManyUserInputEnvelope = {
    data: InteractionCreateManyUserInput | InteractionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type UserPreferenceCreateWithoutUserInput = {
    id?: string;
    language: string;
    theme?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: string;
    language: string;
    theme?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput;
    create: XOR<
      UserPreferenceCreateWithoutUserInput,
      UserPreferenceUncheckedCreateWithoutUserInput
    >;
  };

  export type UserPreferenceCreateManyUserInputEnvelope = {
    data:
      | UserPreferenceCreateManyUserInput
      | UserPreferenceCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PaymentCreateWithoutUserInput = {
    id?: string;
    externalId?: string | null;
    status?: $Enums.PaymentStatus;
    amount: Decimal | DecimalJsLike | number | string;
    paymentMethod?: string | null;
    paymentMethodId?: string | null;
    paymentProvider?: string;
    paymentUrl?: string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string;
    externalId?: string | null;
    status?: $Enums.PaymentStatus;
    amount: Decimal | DecimalJsLike | number | string;
    paymentMethod?: string | null;
    paymentMethodId?: string | null;
    paymentProvider?: string;
    paymentUrl?: string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput;
    create: XOR<
      PaymentCreateWithoutUserInput,
      PaymentUncheckedCreateWithoutUserInput
    >;
  };

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type EmailVerificationCreateWithoutUserInput = {
    id?: string;
    code: string;
    expiresAt: Date | string;
    contactId: string;
    createdAt?: Date | string;
  };

  export type EmailVerificationUncheckedCreateWithoutUserInput = {
    id?: string;
    code: string;
    expiresAt: Date | string;
    contactId: string;
    createdAt?: Date | string;
  };

  export type EmailVerificationCreateOrConnectWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput;
    create: XOR<
      EmailVerificationCreateWithoutUserInput,
      EmailVerificationUncheckedCreateWithoutUserInput
    >;
  };

  export type EmailVerificationCreateManyUserInputEnvelope = {
    data:
      | EmailVerificationCreateManyUserInput
      | EmailVerificationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type InteractionUpsertWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput;
    update: XOR<
      InteractionUpdateWithoutUserInput,
      InteractionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      InteractionCreateWithoutUserInput,
      InteractionUncheckedCreateWithoutUserInput
    >;
  };

  export type InteractionUpdateWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput;
    data: XOR<
      InteractionUpdateWithoutUserInput,
      InteractionUncheckedUpdateWithoutUserInput
    >;
  };

  export type InteractionUpdateManyWithWhereWithoutUserInput = {
    where: InteractionScalarWhereInput;
    data: XOR<
      InteractionUpdateManyMutationInput,
      InteractionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type InteractionScalarWhereInput = {
    AND?: InteractionScalarWhereInput | InteractionScalarWhereInput[];
    OR?: InteractionScalarWhereInput[];
    NOT?: InteractionScalarWhereInput | InteractionScalarWhereInput[];
    id?: StringFilter<"Interaction"> | string;
    userId?: StringFilter<"Interaction"> | string;
    input?: StringFilter<"Interaction"> | string;
    response?: StringFilter<"Interaction"> | string;
    timestamp?: DateTimeFilter<"Interaction"> | Date | string;
    context?: JsonNullableFilter<"Interaction">;
  };

  export type UserPreferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput;
    update: XOR<
      UserPreferenceUpdateWithoutUserInput,
      UserPreferenceUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserPreferenceCreateWithoutUserInput,
      UserPreferenceUncheckedCreateWithoutUserInput
    >;
  };

  export type UserPreferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput;
    data: XOR<
      UserPreferenceUpdateWithoutUserInput,
      UserPreferenceUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserPreferenceUpdateManyWithWhereWithoutUserInput = {
    where: UserPreferenceScalarWhereInput;
    data: XOR<
      UserPreferenceUpdateManyMutationInput,
      UserPreferenceUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type UserPreferenceScalarWhereInput = {
    AND?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[];
    OR?: UserPreferenceScalarWhereInput[];
    NOT?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[];
    id?: StringFilter<"UserPreference"> | string;
    userId?: StringFilter<"UserPreference"> | string;
    language?: StringFilter<"UserPreference"> | string;
    theme?: StringNullableFilter<"UserPreference"> | string | null;
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string;
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string;
  };

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput;
    update: XOR<
      PaymentUpdateWithoutUserInput,
      PaymentUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PaymentCreateWithoutUserInput,
      PaymentUncheckedCreateWithoutUserInput
    >;
  };

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput;
    data: XOR<
      PaymentUpdateWithoutUserInput,
      PaymentUncheckedUpdateWithoutUserInput
    >;
  };

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput;
    data: XOR<
      PaymentUpdateManyMutationInput,
      PaymentUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    OR?: PaymentScalarWhereInput[];
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    id?: StringFilter<"Payment"> | string;
    userId?: StringFilter<"Payment"> | string;
    externalId?: StringNullableFilter<"Payment"> | string | null;
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    amount?:
      | DecimalFilter<"Payment">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?: StringNullableFilter<"Payment"> | string | null;
    paymentMethodId?: StringNullableFilter<"Payment"> | string | null;
    paymentProvider?: StringFilter<"Payment"> | string;
    paymentUrl?: StringNullableFilter<"Payment"> | string | null;
    transactionDetails?: JsonNullableFilter<"Payment">;
    notificationSent?: BoolFilter<"Payment"> | boolean;
    createdAt?: DateTimeFilter<"Payment"> | Date | string;
    updatedAt?: DateTimeFilter<"Payment"> | Date | string;
  };

  export type EmailVerificationUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput;
    update: XOR<
      EmailVerificationUpdateWithoutUserInput,
      EmailVerificationUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      EmailVerificationCreateWithoutUserInput,
      EmailVerificationUncheckedCreateWithoutUserInput
    >;
  };

  export type EmailVerificationUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput;
    data: XOR<
      EmailVerificationUpdateWithoutUserInput,
      EmailVerificationUncheckedUpdateWithoutUserInput
    >;
  };

  export type EmailVerificationUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationScalarWhereInput;
    data: XOR<
      EmailVerificationUpdateManyMutationInput,
      EmailVerificationUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type EmailVerificationScalarWhereInput = {
    AND?:
      | EmailVerificationScalarWhereInput
      | EmailVerificationScalarWhereInput[];
    OR?: EmailVerificationScalarWhereInput[];
    NOT?:
      | EmailVerificationScalarWhereInput
      | EmailVerificationScalarWhereInput[];
    id?: StringFilter<"EmailVerification"> | string;
    code?: StringFilter<"EmailVerification"> | string;
    expiresAt?: DateTimeFilter<"EmailVerification"> | Date | string;
    contactId?: StringFilter<"EmailVerification"> | string;
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string;
    userId?: StringFilter<"EmailVerification"> | string;
  };

  export type UserCreateWithoutInteractionsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput;
    payments?: PaymentCreateNestedManyWithoutUserInput;
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutInteractionsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput;
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput;
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutInteractionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutInteractionsInput,
      UserUncheckedCreateWithoutInteractionsInput
    >;
  };

  export type UserUpsertWithoutInteractionsInput = {
    update: XOR<
      UserUpdateWithoutInteractionsInput,
      UserUncheckedUpdateWithoutInteractionsInput
    >;
    create: XOR<
      UserCreateWithoutInteractionsInput,
      UserUncheckedCreateWithoutInteractionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutInteractionsInput,
      UserUncheckedUpdateWithoutInteractionsInput
    >;
  };

  export type UserUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput;
    payments?: PaymentUpdateManyWithoutUserNestedInput;
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput;
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutPreferencesInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interactions?: InteractionCreateNestedManyWithoutUserInput;
    payments?: PaymentCreateNestedManyWithoutUserInput;
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput;
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput;
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPreferencesInput,
      UserUncheckedCreateWithoutPreferencesInput
    >;
  };

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<
      UserUpdateWithoutPreferencesInput,
      UserUncheckedUpdateWithoutPreferencesInput
    >;
    create: XOR<
      UserCreateWithoutPreferencesInput,
      UserUncheckedCreateWithoutPreferencesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPreferencesInput,
      UserUncheckedUpdateWithoutPreferencesInput
    >;
  };

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: InteractionUpdateManyWithoutUserNestedInput;
    payments?: PaymentUpdateManyWithoutUserNestedInput;
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput;
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutPaymentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interactions?: InteractionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput;
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput;
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPaymentsInput,
      UserUncheckedCreateWithoutPaymentsInput
    >;
  };

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<
      UserUpdateWithoutPaymentsInput,
      UserUncheckedUpdateWithoutPaymentsInput
    >;
    create: XOR<
      UserCreateWithoutPaymentsInput,
      UserUncheckedCreateWithoutPaymentsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPaymentsInput,
      UserUncheckedUpdateWithoutPaymentsInput
    >;
  };

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: InteractionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput;
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput;
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutEmailVerificationsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interactions?: InteractionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput;
    payments?: PaymentCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutEmailVerificationsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    image?: string | null;
    provider?: $Enums.Provider;
    providerId?: string | null;
    plan?: $Enums.Plan;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput;
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutEmailVerificationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutEmailVerificationsInput,
      UserUncheckedCreateWithoutEmailVerificationsInput
    >;
  };

  export type UserUpsertWithoutEmailVerificationsInput = {
    update: XOR<
      UserUpdateWithoutEmailVerificationsInput,
      UserUncheckedUpdateWithoutEmailVerificationsInput
    >;
    create: XOR<
      UserCreateWithoutEmailVerificationsInput,
      UserUncheckedCreateWithoutEmailVerificationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutEmailVerificationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutEmailVerificationsInput,
      UserUncheckedUpdateWithoutEmailVerificationsInput
    >;
  };

  export type UserUpdateWithoutEmailVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: InteractionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput;
    payments?: PaymentUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutEmailVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerId?: NullableStringFieldUpdateOperationsInput | string | null;
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput;
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type InteractionCreateManyUserInput = {
    id?: string;
    input: string;
    response: string;
    timestamp?: Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type UserPreferenceCreateManyUserInput = {
    id?: string;
    language: string;
    theme?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentCreateManyUserInput = {
    id?: string;
    externalId?: string | null;
    status?: $Enums.PaymentStatus;
    amount: Decimal | DecimalJsLike | number | string;
    paymentMethod?: string | null;
    paymentMethodId?: string | null;
    paymentProvider?: string;
    paymentUrl?: string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EmailVerificationCreateManyUserInput = {
    id?: string;
    code: string;
    expiresAt: Date | string;
    contactId: string;
    createdAt?: Date | string;
  };

  export type InteractionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InteractionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InteractionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    context?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type UserPreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserPreferenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    externalId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentProvider?: StringFieldUpdateOperationsInput | string;
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    externalId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentProvider?: StringFieldUpdateOperationsInput | string;
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    externalId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null;
    paymentProvider?: StringFieldUpdateOperationsInput | string;
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    transactionDetails?: NullableJsonNullValueInput | InputJsonValue;
    notificationSent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmailVerificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    contactId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmailVerificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    contactId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmailVerificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    contactId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
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
