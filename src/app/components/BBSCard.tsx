import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Input } from "postcss";
const BBSCard = () => {
  return (
   <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Deploy your new project in one-click.
          </CardDescription>
      </CardHeader>
      <CardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis porro, illum est quo inventore quod facilis iure molestiae dolores nihil doloremque eveniet officiis quidem vel totam eaque soluta! Deserunt?</CardContent>
      <CardFooter className="flex justify-between">
      <Link href={"/bbs-posts/1"} className="text-blue-500">Read more</Link>
      </CardFooter>
    </Card>
  )
}

export default BBSCard
