/**
 * "id": 905829,
    "role": "user",
    "name": "Rafael de Oliveira Silva",
    "email": "rdeoliveirasilva3@gmail.com",
    "premuim": 0,
    "email_verified_at": null,
    "pack_name": null,
    "pack_id": null,
    "transaction_id": null,
    "start_at": null,
    "expired_in": null,
    "password": "$2y$12$ZyErhCVQVM21A5lXQU/lLeaY0irAgoRk0.NOaDTOYGZW4wn90M5cS",
    "remember_token": null,
    "created_at": "2022-10-04T01:23:35.000Z",
    "updated_at": "2022-10-04T01:23:35.000Z",
    "stripe_id": null,
    "card_brand": null,
    "card_last_four": null,
    "trial_ends_at": null,
    "id_discord": null,
    "manual_premuim": 0,
    "provider_name": "google",
    "provider_id": "101729648721494353195",
    "type": null,
    "avatar": "https://lh3.googleusercontent.com/a/ALm5wu2XVhmiEvctapPXXdFToPVFt0Ns0TFKJQiBs9_j=s96-c"
 */

/**
 * sequelize model:create --name users --attributes id:bigint,role:string,name:string,email:string,premuim:integer,email_verified_at:date,pack_name:string,pack_id:integer,transaction_id:string,start_at:date,expired_in:date,password:string,remember_token:string,created_at:date,updated_at:date,stripe_id:string,card_brand:string,card_last_four:string,trial_ends_at:date,id_discord:string,manual_premuim:integer,provider_name:string,provider_id:string,type:string,avatar:string
 */

export type User = {
  id: number;
  role: string;
  name: string;
  email: string;
  premuim: number;
  email_verified_at: string | null;
  pack_name: string | null;
  pack_id: number | null;
  transaction_id: number | null;
  start_at: string | null;
  expired_in: string | null;
  password: string;
  remember_token: string | null;
  created_at: string;
  updated_at: string;
  stripe_id: string | null;
  card_brand: string | null;
  card_last_four: string | null;
  trial_ends_at: string | null;
  id_discord: string | null;
  manual_premuim: number;
  provider_name: string;
  provider_id: string;
  type: string | null;
  avatar: string;
};