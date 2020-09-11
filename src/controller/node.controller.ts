import { Request, Response } from "express";
import { Node, NodeInterface } from "../model/node.model";

export class NodesController {

    
  public index(req: Request, res: Response) {
    Node.findAll<Node>({})
      .then((nodes: Array<Node>) => res.json(nodes))
      .catch((err: Error) => res.status(500).json(err));
  }
}