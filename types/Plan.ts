/**
 * [
  {
    "id": "{id do plano}",
    "name":"{nome do plano}",
    "description":"{descrição do plano}",
    "price":"{preço do type 'normal', que é para cartão de crédito}",
    "billet_price":"{preço do type 'boleto'}",
    "pix_price":"{preço do type 'pix'}",
    "normal_picture_url":"{imagem do type 'normal'}",
    "billet_picture_url":"{imagem do type 'boleto'}",
    "pix_picture_url":"{imagem do type 'pix'}",
    "stripe_plan_id":"{código que não sei pra que serve, rs}",
    "stripe_price_id":"{código que não sei pra que serve, rs}",
    "pack_duration":"{duração em dias que o plano acrescenta}",
    "created_at":"{data da criação}",
    "updated_at":"{data da última alteração}"
  }
]
 */

export type Plan = {
  id: number;
  name: string;
  description: string;
  price: string;
  billet_price: string;
  pix_price: string;
  normal_picture_url: string;
  billet_picture_url: string;
  pix_picture_url: string;
  stripe_plan_id: string;
  stripe_price_id: string;
  pack_duration: string;
  created_at: string;
  updated_at: string;
};