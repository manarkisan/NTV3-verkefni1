import Button from "./Button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ShopCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cardvjghjghj Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>
          <Button />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
